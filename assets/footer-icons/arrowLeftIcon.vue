<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
  >
    <path
      :fill="iconColor"
      d="M14.41 18.16L8.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95z"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconColor: {
    type: String,
    default: "#c9c9c9",
  },
});
</script>
