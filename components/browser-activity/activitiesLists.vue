<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <BrowserActivitySourceLink
      v-for="(link, index) in bookmarks"
      :key="index"
      :to="link.url"
      :iconSrc="getIconSrc(link.name)"
      :label="link.name"
    />
    <p
      class="flex flex-col items-center gap-2 cursor-pointer"
      title="Add New"
      @click="createBookmarkModal"
    >
      <span
        class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-sm p-2"
      >
        <img src="/assets/icons/plusIcon.svg" alt="arrow icon" />
      </span>
    </p>
  </div>

  <UiKitsUiSlotsFormModelSlot
    form-title="Create Bookmark"
    @close-modal="createBookmarkModal"
    v-if="createABookmarks"
    v-model="createABookmarks"
    @closeDialog="createBookmarkModal"
  >
    <div
      v-for="(option, index) in options"
      :key="index"
      class="flex items-center gap-5 py-2"
    >
      <span>{{ index + 1 }}.</span>
      <div class="flex gap-5 rounded-2xl pr-2 items-center flex-grow">
        <UInput
          size="sm"
          class="w-full lg:w-40vw"
          v-model="option.name"
          placeholder="Name"
          maxLength="10"
        />
        <UInput
          size="sm"
          class="w-full lg:w-40vw"
          v-model="option.url"
          placeholder="http://example.com"
          type="url"
        />
        <img
          src="/assets/icons/deleteIcon.svg"
          alt="delete"
          class="cursor-pointer"
          @click="removeOption(index)"
        />
      </div>
    </div>

    <UButton
      v-if="options.length < 7"
      size="sm"
      color="gray"
      variant="ghost"
      trailing-icon="i-heroicons-plus-20-solid"
      class="rounded-2xl px-6 w-16"
      @click="addOption"
    />

    <div class="flex justify-end">
      <UButton
        class="w-fit"
        color="blue"
        variant="solid"
        @click="createABookmarksubmit"
        >{{ texts.bookFormModel.add }}</UButton
      >
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup lang="ts">
import texts from "@/texts/texts.json";
import type { Bookmark } from "~/types/types";

const defaultIcon = "i-ic-twotone-vpn-lock";
const iconMap: Record<string, string> = {
  Behance: "i-devicon-behance",
  Github: "i-devicon-github",
  Facebook: "i-devicon-facebook",
  AWS: "i-devicon-amazonwebservices-wordmark",
  Google: "i-devicon-google",
  Stackoverflow: "i-devicon-stackoverflow",
  Couchbase: "i-devicon-couchbase",
};

const BOOKMARKS_KEY = "da-browser-ex-bookmarks-list";

const bookmarks = ref<Bookmark[]>([]);
const uniqueId = encodeBase62(Date.now());

const loadBookmarks = () => {
  const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
  if (storedBookmarks) {
    bookmarks.value = JSON.parse(storedBookmarks);
  }
};

const saveBookmarks = () => {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks.value));
};

const createABookmarks = ref(false);
const optionIndex = ref(0);
const options = ref([
  {
    id: Date.now() + optionIndex.value++,
    name: "",
    url: "",
  },
]);

watch(
  options,
  () => {
    options.value.length >= 1 &&
      options.value.length <= 7 &&
      options.value.every((option) => option.name && option.url);
  },
  { deep: true }
);

const getIconSrc = (label: string) => {
  return iconMap[label] || defaultIcon;
};

const addOption = () => {
  if (options.value.length < 7)
    options.value.push({
      id: Date.now() + optionIndex.value++,
      name: "",
      url: "",
    });
};

const removeOption = (index: number) => {
  if (options.value.length > 1) options.value.splice(index, 1);
  else {
    options.value[index].name = "";
    options.value[index].url = "";
  }
};

const createBookmarkModal = () => {
  createABookmarks.value = !createABookmarks.value;

  if (!createABookmarks.value) {
    options.value = [
      {
        id: Date.now() + optionIndex.value++,
        name: "",
        url: "",
      },
    ];
  }
};

const createABookmarksubmit = () => {
  if (!options.value.every((option) => option.name && option.url)) {
    return;
  }

  options.value.forEach((option) => {
    bookmarks.value.push({
      id: uniqueId + optionIndex.value++,
      name: option.name,
      url: option.url,
    });
  });

  saveBookmarks();
  createBookmarkModal();
};

onMounted(() => {
  loadBookmarks();
});
</script>
