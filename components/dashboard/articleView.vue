<template>
  <div>
    <h1 class="text-3xl font-bold px-5">{{ article.title }}</h1>
    <p class="text-gray-400 p-5">
      <span>{{ article.source }}</span> ~ <span>{{ article.readTime }}</span>
    </p>
    <img
      :src="article.imageSrc"
      alt="article img"
      class="w-full h-96 object-cover"
    />
  </div>
  <div class="p-5">
    <p
      v-for="(paragraph, index) in article.content"
      :key="index"
      class="text-gray-500 py-5"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script setup>
const article = ref({
  title: "Cambridge Folk Festival celebrates its 60th year",
  source: "BBC",
  readTime: "30 min read",
  imageSrc:
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7f22/live/f80bd2e0-451c-11ef-9e1c-3b4a473456a6.jpg.webp",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vitae libero auctor scelerisque. Sed non massa nulla. Aliquam erat volutpat. Curabitur imperdiet elit in velit dictum, a ultricies nisi venenatis. Morbi sit amet quam orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere, eros fermentum.",
    "Integer convallis hendrerit justo, sed laoreet enim ultricies non. Duis in gravida turpis. Sed pellentesque elit quis interdum venenatis. Proin sit amet risus non elit auctor tincidunt id ac urna. Sed venenatis, dui eu condimentum ultricies, mauris felis rhoncus nisl, nec vulputate dolor nisl felis vel turpis ultricies, id auctor ex laoreet. Nulla vel volutpat lectus, vel condimentum augue.",
    "Nam ullamcorper augue id felis iaculis, ac gravida nunc molestie. In scelerisque felis a urna malesuada dictum. Etiam vel dolor id libero tincidunt facilisis. Quisque a magna nulla. Donec ut dignissim turpis. Donec euismod tellus ac sapien blandit lacinia. In at urna libero. Etiam eget leo sit amet purus vestibulum porttitor. In tincidunt nulla sit amet tortor posuere, at posuere turpis tincidunt.",
    "Curabitur in lectus at ligula egestas tincidunt. Nulla a justo nisl. Ut blandit nisi in turpis sollicitudin, nec lacinia odio faucibus. Vivamus efficitur, lorem a fermentum vestibulum, dui justo pulvinar leo, non pellentesque risus vitae risus tincidunt, quis interdum nisi vehicula. Integer id diam nulla. Nullam ac nunc quis orci porttitor rhoncus. Sed vitae purus odio.",
    "Nam tristique urna ut lacus luctus, sed fermentum nunc sollicitudin. Sed a dui a libero auctor sollicitudin ut id lorem. Fusce pharetra ex sed ligula bibendum, ut dapibus mi venenatis. Phasellus ac odio vel dolor auctor cursus. Praesent euismod dictum lectus sed viverra. Suspendisse eget sapien in sem cursus facilisis. Sed viverra felis non metus ullamcorper sollicitudin. Ut nec purus magna. Mauris euismod ligula eget purus cursus sollicitudin.",
  ],
});
</script>
