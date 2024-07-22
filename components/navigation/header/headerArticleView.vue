<template>
  <div class="flex flex-row gap-2 items-center justify-center mx-5 my-5">
    <div
      class="flex items-center gap-5 w-full bg-[#F5F5F5] px-5 py-2 rounded-2xl"
    >
      <UDropdown :items="sslInfo" :popper="{ arrow: true }">
        <img
          src="/assets/header-icons/infoIcon.svg"
          alt="info icon"
          class="w-5 h-5 cursor-pointer"
          title="Info"
        />
      </UDropdown>
      <input
        readonly
        type="search"
        placeholder="http://www.example.com/reads/sjkdhsd"
        class="w-full bg-[#F5F5F5] border-0 outline-none"
      />
    </div>

    <img
      src="/assets/header-icons/addfavoriteIcon.svg"
      alt="favorite icon"
      class="w-5 h-5 cursor-pointer"
      title="Favorite"
    />

    <img
      src="/assets/header-icons/downloadIcon.svg"
      alt="download icon"
      class="w-5 h-5 cursor-pointer"
      title="Save as pdf"
    />

    <UDropdown :items="moreOptions" :popper="{ arrow: true }">
      <img
        src="/assets/header-icons/moreIcon.svg"
        alt="more icon"
        class="w-5 h-5 cursor-pointer"
        title="More"
      />
    </UDropdown>
  </div>

  <UiKitsUiSlotsFormModelSlot
    form-title="Edit Article"
    @close-modal="editArticleModal"
    v-if="editAArticles"
    v-model="editAArticles"
    @closeDialog="editAArticles = false"
  >
    <label class="font-bold" for="fullName">{{
      texts.createArticleForm.fullname
    }}</label>
    <UInput placeholder="Full name" v-model="fullName" />

    <label class="font-bold" for="articleUrl">{{
      texts.createArticleForm.url
    }}</label>
    <UInput type="url" placeholder="https://example.com" v-model="articleUrl" />

    <label class="font-bold" for="sourceName">{{
      texts.createArticleForm.source
    }}</label>
    <UInput placeholder="Source name" v-model="sourceName" />

    <label class="font-bold" for="articleTitle">{{
      texts.createArticleForm.title
    }}</label>
    <UInput placeholder="Enter title" v-model="articleTitle" />

    <label class="font-bold" for="articleDescription">{{
      texts.createArticleForm.description
    }}</label>
    <UTextarea
      placeholder="Message"
      :rows="10"
      v-model="articleDescription"
      maxLength="500"
    />

    <div class="flex justify-end">
      <UButton
        class="w-fit"
        color="blue"
        variant="solid"
        @click="editAArticleSubmit"
      >
        {{ texts.bookFormModel.edit }}
      </UButton>
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup lang="ts">
import { encodeBase62 } from "@/utils/encodeBase62";
import texts from "@/texts/texts.json";

const editAArticles = ref(false);
const fullName = ref("");
const articleUrl = ref("");
const sourceName = ref("");
const articleTitle = ref("");
const articleDescription = ref("");

const editArticleModal = () => {
  editAArticles.value = !editAArticles.value;

  if (!editAArticles.value) {
    fullName.value = "";
    articleUrl.value = "";
    sourceName.value = "";
    articleTitle.value = "";
    articleDescription.value = "";
  }
};

const editAArticleSubmit = () => {
  if (
    !fullName.value ||
    !articleUrl.value ||
    !sourceName.value ||
    !articleTitle.value ||
    !articleDescription.value
  ) {
    console.error("All fields are required to add a Article.");
    return;
  }

  const uniqueId = encodeBase62(Date.now());

  editArticleModal();
};

const moreOptions = [
  [
    {
      label: "Share",
    },
    {
      label: "Edit",
      click() {
        editArticleModal();
      },
    },
    {
      label: "Delete",
    },
    {
      label: "Report",
    },
  ],
];

const sslInfo = [
  [
    {
      label: "This page is secure",
      icon: "i-heroicons-lock-closed-solid",
    },
  ],
];
</script>
