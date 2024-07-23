<template>
  <div class="flex flex-col mb-20">
    <div class="flex items-center justify-between mx-5 mt-8 mb-4">
      <p class="text-[#73B1F0] text-sm font-normal">
        <span v-if="articles && articles.length > 0">{{
          texts.articles.text
        }}</span>
        <span v-else>{{ texts.articles.empty }}</span>
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
        :src="article.image || article.defaultImage"
        alt="article img"
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
    <p class="text-gray-400">{{ texts.createArticleForm.urlInfo }}</p>
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

<script setup lang="ts">
import { useArticleStore } from "@/store/articles";
import texts from "@/texts/texts.json";

const articleStore = useArticleStore();
const createAArticles = ref(false);
const fullName = ref("");
const articleUrl = ref("");
const sourceName = ref("");
const articleTitle = ref("");
const articleDescription = ref("");

const articles = computed(() => articleStore.articles);

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
    !sourceName.value ||
    !articleTitle.value ||
    !articleDescription.value
  ) {
    console.error("All fields are required to add an article.");
    return;
  }

  articleStore.createArticle({
    source: sourceName.value,
    title: articleTitle.value,
    image: articleUrl.value,
    message: articleDescription.value,
  });

  createArticleModal();
};

onMounted(() => {
  articleStore.loadArticles();
});
</script>
