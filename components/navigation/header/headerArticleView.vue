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
        placeholder="http://www.example.com/reads/sjkdhsd"
        class="w-full bg-[#F5F5F5] border-0 outline-none"
      />
    </div>

    <img
      src="/assets/header-icons/addfavoriteIcon.svg"
      alt="favorite icon"
      class="w-5 h-5 cursor-pointer"
      title="Favorite"
    />

    <img
      src="/assets/header-icons/downloadIcon.svg"
      alt="download icon"
      class="w-5 h-5 cursor-pointer"
      title="Save as pdf"
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
const moreOptions = [
  [
    {
      label: "Share",
    },
    {
      label: "Edit",
    },
    {
      label: "Delete",
    },
    {
      label: "Report",
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
