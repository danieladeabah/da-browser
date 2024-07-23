<template>
  <div v-if="article" class="p-5">
    <h1 class="text-3xl font-bold px-5">{{ article.title }}</h1>
    <p class="text-gray-400 p-5">
      <span>{{ article.source }}</span> ~
      <span>{{ formattedDate }}</span>
    </p>
    <img
      :src="article.image"
      alt="article img"
      class="w-full h-96 object-cover"
    />
    <div class="p-5">
      <p class="text-gray-500 py-5">
        {{ article.message }}
      </p>
    </div>
  </div>
  <div v-else class="p-5">Loading...</div>
</template>

<script setup lang="ts">
import { useArticleStore } from "@/store/articles";
import { formatDate } from "~/utils/formatDate";

const route = useRoute();
const articleStore = useArticleStore();
const article = ref<any>(null);

const loadArticle = () => {
  const articleId = route.params.viewId as string;
  article.value = articleStore.getArticleById(articleId).value;
};

const formattedDate = computed(() => {
  if (article.value && article.value.createdAt) {
    return formatDate(article.value.createdAt);
  }
  return "";
});

onMounted(() => {
  articleStore.loadArticles();
  loadArticle();
});
</script>
