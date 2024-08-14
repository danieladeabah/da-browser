<template>
  <div
    class="fixed bg-white bottom-0 border-t flex items-center justify-between w-full lg:w-5/12 p-2 lg:p-5"
  >
    <ArrowLeftIcon
      :iconColor="route.path === '/' ? '#c9c9c9' : '#696969'"
      @click="navigateTo('/')"
      class="cursor-pointer"
    />
    <RefreshIcon @click="reloadPage" class="cursor-pointer" />
    <UDropdown
      :items="moreOptions"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ arrow: true }"
    >
      <UAvatar src="https://avatars.githubusercontent.com/u/124435531?v=4" />

      <template #account="{ item }">
        <div class="text-left">
          <p>{{ texts_b.specialization }}</p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>
        <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </template>
    </UDropdown>
  </div>
</template>

<script setup>
import ArrowLeftIcon from "@/assets/footer-icons/arrowLeftIcon.vue";
import RefreshIcon from "@/assets/footer-icons/refreshIcon.vue";
import texts_b from "@/texts/texts.json";

const route = useRoute();
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};

const reloadPage = () => {
  window.location.reload();
};

const moreOptions = [
  [
    {
      label: "Daniel Adeabah",
      slot: "account",
      disabled: true,
    },
    {
      label: "Portfolio",
      icon: "i-heroicons-link-20-solid",
      click() {
        window.open("https://danieladeabah.vercel.app", "_blank");
      },
    },
    {
      label: "LinkedIn",
      icon: "i-heroicons-link-20-solid",
      click() {
        window.open("https://www.linkedin.com/in/danieladeabaa/", "_blank");
      },
    },
    {
      label: "GitHub",
      icon: "i-heroicons-link-20-solid",
      click() {
        window.open("https://github.com/danieladeabah", "_blank");
      },
    },
  ],
];
</script>
