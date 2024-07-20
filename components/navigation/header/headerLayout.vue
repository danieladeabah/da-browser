<template>
  <HeaderDashboard v-if="$route.path === '/'" />
  <HeaderArticleView v-else />
</template>

<script setup lang="ts">
import HeaderDashboard from "./headerDashboard.vue";
import HeaderArticleView from "./headerArticleView.vue";
</script>
