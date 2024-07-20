<template>
  <NavigationHeaderDashboard v-if="$route.path === '/'" />
  <NavigationHeaderArticleView v-else />
</template>
