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
        :value="currentArticleUrl"
        class="w-full bg-[#F5F5F5] border-0 outline-none"
      />
    </div>

    <img
      src="/assets/header-icons/shareIcon.svg"
      alt="share icon"
      class="w-5 h-5 cursor-pointer"
      title="Share"
      @click="shareArticle"
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
</template>

<script setup lang="ts">
import { useArticleStore } from "@/store/articles";

const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();

const currentArticleId = ref<string>("");
const currentArticleUrl = computed(() => window.location.href);

const deleteArticle = () => {
  if (!currentArticleId.value) {
    console.error("No article selected for deletion.");
    return;
  }

  articleStore.deleteArticle(currentArticleId.value);
  router.push("/");
};

const shareArticle = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copied to clipboard. Share it with others!");
  });
};

onMounted(() => {
  currentArticleId.value = route.params.viewId as string;
  articleStore.loadArticles();
});

const moreOptions = [
  [
    {
      label: "Delete",
      click: deleteArticle,
    },
    {
      label: "Report",
      click() {
        window.open("https://danieladeabah.vercel.app/", "_blank");
      },
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
