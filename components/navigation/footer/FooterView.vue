<template>
  <div
    class="fixed bg-white bottom-0 flex items-center justify-between w-full lg:w-5/12 p-2 lg:p-5"
  >
    <ArrowLeftIcon
      :iconColor="route.path === '/' ? '#c9c9c9' : '#696969'"
      @click="navigateTo('/')"
      class="cursor-pointer"
    />
    <RefreshIcon
      :iconColor="route.path === '/' ? '#c9c9c9' : '#696969'"
      @click="reloadPage"
      class="cursor-pointer"
    />
    <img
      v-for="(icon, index) in icons"
      :key="index"
      :src="icon.src"
      :alt="icon.alt"
      @click="icon.Onclick"
      class="w-8 h-8 cursor-pointer"
    />
  </div>
</template>

<script setup>
import ArrowLeftIcon from "@/assets/footer-icons/arrowLeftIcon.vue";
import RefreshIcon from "@/assets/footer-icons/refreshIcon.vue";

const route = useRoute();
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};

const reloadPage = () => {
  window.location.reload();
};

const icons = [
  {
    src: "/_nuxt/assets/footer-icons/addIcon.svg",
    alt: "add icon",
  },
  {
    src: "/_nuxt/assets/footer-icons/menuIcon.svg",
    alt: "menu icon",
  },
];
</script>
