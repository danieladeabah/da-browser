<template>
  <NuxtLink :to="to" class="flex flex-col items-center gap-2">
    <span class="flex items-center justify-center bg-gray-100 rounded-xl p-2">
      <img :src="iconSrc" :alt="iconAlt" :class="iconClass" />
    </span>
    <span class="text-gray-400 text-sm font-normal">{{ label }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: String,
  iconSrc: String,
  iconAlt: String,
  label: String,
});
</script>
