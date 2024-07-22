<template>
  <h1 class="text-3xl font-bold px-5">{{ article.title }}</h1>
  <p class="text-gray-400 p-5">
    <span>{{ article.source }}</span> ~ <span>{{ article.readTime }}</span> ~
    <span>{{ article.createdAt }}</span>
  </p>
  <img
    :src="article.image"
    alt="article img"
    class="w-full h-96 object-cover"
  />
  <div class="p-5">
    <p class="text-gray-500 py-5">
      {{ article.message }}
    </p>
  </div>
</template>

<script setup>
const article = ref({
  title: "Cambridge Folk Festival celebrates its 60th year",
  source: "BBC",
  readTime: "30 min read",
  createdAt: "10/10/2022",
  image:
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7f22/live/f80bd2e0-451c-11ef-9e1c-3b4a473456a6.jpg.webp",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vitae libero auctor scelerisque. Sed non massa nulla. Aliquam erat volutpat. Curabitur imperdiet elit in velit dictum, a ultricies nisi venenatis. Morbi sit amet quam orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere, eros fermentum.",
});
</script>
