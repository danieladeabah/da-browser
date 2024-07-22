<template>
  <div class="flex flex-col mb-20">
    <div class="flex items-center justify-between mx-5 mt-8 mb-4">
      <p class="text-[#73B1F0] text-sm font-normal">
        {{ texts.articles.text }}
      </p>
      <p
        class="flex items-center gap-1 text-sm text-gray-400 font-extralight cursor-pointer bg-[#F5F5F5] rounded px-2"
        title="Create Article"
        @click="createArticleModal"
      >
        <img
          src="/assets/icons/plusIcon.svg"
          alt="create icon"
          class="w-2 h-2 cursor-pointer"
          title="Create Article"
        /><span>{{ texts.comments.add }}</span>
      </p>
    </div>
    <NuxtLink
      v-for="(article, index) in articles"
      :key="index"
      :to="'reads/' + article.id"
      class="flex items-center justify-between mx-5 border gap-5 rounded-xl p-5 my-2"
    >
      <div class="flex flex-col gap-3">
        <p class="text-gray-400 text-sm font-normal">{{ article.source }}</p>
        <p>{{ article.title }}</p>
      </div>
      <img
        :src="article.image"
        :alt="article.alt"
        class="w-20 h-20 rounded-md object-cover"
      />
    </NuxtLink>
  </div>

  <UiKitsUiSlotsFormModelSlot
    form-title="Create Article"
    @close-modal="createArticleModal"
    v-if="createAArticles"
    v-model="createAArticles"
    @closeDialog="createAArticles = false"
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
        @click="createAArticleSubmit"
      >
        {{ texts.bookFormModel.add }}
      </UButton>
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup>
import { encodeBase62 } from "@/utils/encodeBase62";
import texts from "@/texts/texts.json";

const createAArticles = ref(false);
const fullName = ref("");
const articleUrl = ref("");
const sourceName = ref("");
const articleTitle = ref("");
const articleDescription = ref("");

const createArticleModal = () => {
  createAArticles.value = !createAArticles.value;

  if (!createAArticles.value) {
    fullName.value = "";
    articleUrl.value = "";
    sourceName.value = "";
    articleTitle.value = "";
    articleDescription.value = "";
  }
};

const createAArticleSubmit = () => {
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

  createArticleModal();
};

const articles = [
  {
    id: "skdsjd",
    source: "Musicpleer",
    title: "Ariana Grande releases her new single: Thank you, Next",
    image:
      "https://media.glamour.com/photos/5d6c05b904a19500081171a9/master/w_2560%2Cc_limit/ariana-grande-concert.jpg",
    alt: "Ariana Grande concert",
  },
  {
    id: "skdsjd",
    source: "BBC",
    title: "Cambridge Folk Festival celebrates its 60th year",
    image:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7f22/live/f80bd2e0-451c-11ef-9e1c-3b4a473456a6.jpg.webp",
    alt: "Cambridge Folk Festival",
  },
  {
    id: "skdsjd",
    source: "nbcnews.com",
    title:
      "Trump target of assassination attempt; says he was shot in ear at rally",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2024-07/240713-donald-trump-secret-service-rally-wm-323p-6d65b1.jpg",
    alt: "Trump rally",
  },
  {
    id: "skdsjd",
    source: "BBC",
    title: "Emotional Usher accepts lifetime achievement award",
    image:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/99b7/live/e8bc4ef0-3793-11ef-bbe0-29f79e992ddd.jpg.webp",
    alt: "Usher award",
  },
];
</script>
