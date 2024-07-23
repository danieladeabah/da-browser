import { defineStore } from "pinia";
import { encodeBase62 } from "@/utils/encodeBase62";

export const useArticleStore = defineStore("article", () => {
  const articles = ref<any[]>([]);
  const defaultImage =
    "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg";

  const loadArticles = () => {
    const savedArticles = localStorage.getItem("da-browser-ex-articles");
    if (savedArticles) {
      articles.value = JSON.parse(savedArticles);
    }
  };

  const createArticle = (article: any) => {
    const uniqueId = encodeBase62(Date.now());
    const newArticle = {
      id: uniqueId,
      ...article,
      image: article.image || defaultImage,
      createdAt: new Date().toISOString(),
    };
    articles.value.push(newArticle);
    localStorage.setItem(
      "da-browser-ex-articles",
      JSON.stringify(articles.value)
    );
  };

  const deleteArticle = (id: string) => {
    articles.value = articles.value.filter((article) => article.id !== id);
    localStorage.setItem(
      "da-browser-ex-articles",
      JSON.stringify(articles.value)
    );
  };

  const getArticleById = (id: string) => {
    return computed(
      () => articles.value.find((article) => article.id === id) || null
    );
  };

  return {
    articles,
    loadArticles,
    createArticle,
    deleteArticle,
    getArticleById,
  };
});
