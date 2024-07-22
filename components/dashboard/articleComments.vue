<template>
  <UiKitsHorizontalLine />
  <div class="flex flex-col mx-5 my-14">
    <div class="flex items-center justify-between my-2">
      <p class="text-[#73B1F0] text-sm font-normal">
        {{ texts.comments.text }} ({{ comments.length }})
      </p>
      <p
        class="flex items-center gap-1 text-sm text-gray-400 font-extralight cursor-pointer"
      >
        <img
          src="/assets/icons/plusIcon.svg"
          alt="comment icon"
          class="w-2 h-2 cursor-pointer"
          title="Add Comment"
        /><span>{{ texts.comments.add }}</span>
      </p>
    </div>
    <div v-for="comment in comments" :key="comment.id">
      <DashboardCommentsLists :comment="comment" />
    </div>
  </div>
</template>

<script setup>
import texts from "~/texts/texts.json";

const comments = ref([
  {
    id: 1,
    author: "Fiz Danielz",
    time: "1 hr ago",
    text: "Suspendisse eget sapien in sem cursus facilisis. Sed viverra felis non metus ullamcorper sollicitudin. Ut nec purus magna",
    likes: 12,
    user_replies: 1,
    replies: [
      {
        id: 2,
        author: "Jane Dee",
        time: "2 mins ago",
        text: "Sed viverra felis non metus ullamcorper sollicitudin. Ut nec purus magna. Mauris euismod ligula eget purus cursus sollicitudin.",
        likes: 2,
        user_replies: 0,
        replies: [],
      },
    ],
  },
]);
</script>
