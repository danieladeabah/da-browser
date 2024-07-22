<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <BrowserActivitySourceLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      :iconSrc="link.iconSrc"
      :label="link.label"
    />
    <p class="flex flex-col items-center gap-2 cursor-pointer" title="Add New">
      <span
        class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-sm p-2"
      >
        <img src="/assets/icons/plusIcon.svg" alt="arrow icon" />
      </span>
    </p>
  </div>
</template>

<script setup>
const links = [
  {
    to: "https://www.behance.net",
    iconSrc: "i-devicon-behance",
    label: "Behance",
  },
  {
    to: "https://www.github.com",
    iconSrc: "i-devicon-github",
    label: "Github",
  },
  {
    to: "https://www.facebook.com",
    iconSrc: "i-devicon-facebook",
    label: "Facebook",
  },
  {
    to: "https://www.amazon.com",
    iconSrc: "i-devicon-amazonwebservices-wordmark",
    label: "AWS",
  },
  {
    to: "https://www.google.com",
    iconSrc: "i-devicon-google",
    label: "Google",
  },
  {
    to: "https://stackoverflow.com",
    iconSrc: "i-devicon-stackoverflow",
    label: "Stackoverflow",
  },
  {
    to: "https://www.couchbase.com",
    iconSrc: "i-devicon-couchbase",
    label: "Couchbase",
  },
];
</script>
