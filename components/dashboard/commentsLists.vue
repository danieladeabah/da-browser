<template>
  <div>
    <UiKitsHorizontalLine />
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="font-semibold text-sm">{{ comment.author }}</span>
      </div>
      <span class="text-gray-400">{{ comment.time }}</span>
    </div>
    <p>{{ comment.message }}</p>
    <div class="flex items-center gap-5">
      <p class="flex items-center gap-1">
        <img
          src="/assets/icons/thumb-up-outline.svg"
          alt="like icon"
          class="w-3 h-3 cursor-pointer"
          title="Like"
        />
        <span class="text-gray-400 text-[10px]">{{ comment.likes }}</span>
      </p>
      <p class="flex items-center gap-1">
        <img
          src="/assets/icons/replyIcon.svg"
          alt="reply icon"
          class="w-3 h-3 cursor-pointer"
          title="Reply"
        />
        <span class="text-gray-400 text-[10px]">{{
          comment.user_replies
        }}</span>
      </p>
      <UDropdown
        mode="hover"
        :popper="{ placement: 'right-start' }"
        :items="deleteLists"
        ><p class="flex items-center gap-1">
          <img
            src="/assets/icons/deleteIcon.svg"
            alt="delete icon"
            class="w-3 h-3 cursor-pointer"
            title="Delete"
          /></p
      ></UDropdown>
    </div>
    <div v-if="comment.replies.length" class="pl-4 border-l-2 border-gray-300">
      <DashboardCommentsLists
        v-for="child in comment.replies"
        :key="child.id"
        :comment="child"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  comment: Object,
});

const deleteLists = [
  [
    {
      label: "Cancel",
    },
    {
      label: "Yes, Remove",
    },
  ],
];
</script>
