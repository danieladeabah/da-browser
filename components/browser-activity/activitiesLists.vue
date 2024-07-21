<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <BrowserActivitySourceLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      :iconSrc="link.iconSrc"
      :iconAlt="link.iconAlt"
      :label="link.label"
      :iconClass="link.iconClass"
    />
    <NuxtLink to="/reads/dd" class="flex flex-col items-center gap-2">
      <span
        class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl p-2"
      >
        <img src="/assets/icons/plusIcon.svg" alt="arrow icon" />
      </span>
      <span class="text-gray-400 text-sm font-normal">Add New</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const links = [
  {
    to: "https://www.behance.net",
    iconSrc: "_nuxt/assets/source-icons/behance.svg",
    iconAlt: "Behance icon",
    label: "Behance",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/chrome.svg",
    iconAlt: "Chrome icon",
    label: "Chrome",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/facebook.svg",
    iconAlt: "Facebook icon",
    label: "Facebook",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/jeet.svg",
    iconAlt: "Jeet icon",
    label: "Jeet",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/google.svg",
    iconAlt: "Google icon",
    label: "Google",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/stackoverflow.svg",
    iconAlt: "Stackoverflow icon",
    label: "Stackoverflow",
  },
  {
    to: "/reads/dd",
    iconSrc: "_nuxt/assets/source-icons/couchbase.svg",
    iconAlt: "Couchbase icon",
    label: "Couchbase",
  },
];
</script>
