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
    @closeDialog="createABookmarks = false"
  >
    <label class="font-bold" for="bookName">{{
      texts.bookFormModel.name
    }}</label>
    <UInput placeholder="Name" v-model="bookName" maxLength="100" />

    <label class="font-bold" for="bookUrl">{{ texts.bookFormModel.url }}</label>
    <UInput type="url" placeholder="https://example.com" v-model="bookUrl" />

    <div class="flex justify-end">
      <UButton
        class="w-fit"
        color="blue"
        variant="solid"
        @click="createABookmarkSubmit"
      >
        {{ texts.bookFormModel.add }}
      </UButton>
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup>
import { encodeBase62 } from "@/utils/encodeBase62";
import texts from "@/texts/texts.json";

const createABookmarks = ref(false);
const bookName = ref("");
const bookUrl = ref("");

const createBookmarkModal = () => {
  createABookmarks.value = !createABookmarks.value;

  if (!createABookmarks.value) {
    bookName.value = "";
    bookUrl.value = "";
  }
};

const createABookmarkSubmit = () => {
  if (!bookName.value || !bookUrl.value) {
    console.error("All fields are required to add a bookmark.");
    return;
  }

  const uniqueId = encodeBase62(Date.now());

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
