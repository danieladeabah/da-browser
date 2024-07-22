<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <BrowserActivitySourceLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      :iconSrc="link.iconSrc"
      :label="link.label"
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

const createABookmarks = ref(false);
const optionIndex = ref(0);
const options = ref([
  {
    id: assigneesEncodeBase62(Date.now(), optionIndex.value++),
    name: "",
    url: "",
  },
]);

watch(
  [options],
  () => {
    options.value.length >= 1 &&
      options.value.length <= 7 &&
      options.value.every((option) => option.name && option.url);
  },
  { deep: true }
);

const addOption = () => {
  if (options.value.length < 7)
    options.value.push({
      id: assigneesEncodeBase62(Date.now(), optionIndex.value++),
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
        id: assigneesEncodeBase62(Date.now(), optionIndex.value++),
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

  createBookmarkModal();
};

const links = [
  {
    to: "https://www.behance.net",
    iconSrc: "i-devicon-behance",
    label: "Behance",
  },
  {
    to: "https://www.github.com",
    iconSrc: "i-devicon-github",
    label: "Github",
  },
  {
    to: "https://www.facebook.com",
    iconSrc: "i-devicon-facebook",
    label: "Facebook",
  },
  {
    to: "https://www.amazon.com",
    iconSrc: "i-devicon-amazonwebservices-wordmark",
    label: "AWS",
  },
  {
    to: "https://www.google.com",
    iconSrc: "i-devicon-google",
    label: "Google",
  },
  {
    to: "https://stackoverflow.com",
    iconSrc: "i-devicon-stackoverflow",
    label: "Stackoverflow",
  },
  {
    to: "https://www.couchbase.com",
    iconSrc: "i-devicon-couchbase",
    label: "Couchbase",
  },
];
</script>
