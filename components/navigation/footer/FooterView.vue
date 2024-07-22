<template>
  <div
    class="fixed bg-white bottom-0 border-t flex items-center justify-between w-full lg:w-5/12 p-2 lg:p-5"
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
    <UIcon
      v-for="(icon, index) in icons"
      :key="index"
      :name="icon.src"
      @click="icon.Onclick"
      dynamic
      class="w-8 h-8 cursor-pointer text-[#696969]"
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
    src: "i-mdi-light-plus-box",
    alt: "add icon",
  },
  {
    src: "i-mdi-light-menu",
    alt: "menu icon",
  },
];
</script>
