<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  title: "Da Browser Ex",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [
    { name: "description", content: "DA Browser Ex | Daniel Adeabah" },
    {
      name: "keywords",
      content:
        "Daniel Adeabah, Browser, Browser lists, Browser, Browser App, Web Developer, Web Designer, Software Engineer, Software Developer, Bamiankor, Nzema, Accra Developers, Ghana Developers, Front-End Developer",
    },
    { name: "author", content: "Daniel Adeabah" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
