<template>
  <UiKitsHorizontalLine />
  <div class="flex flex-col mx-5 my-14">
    <div class="flex items-center justify-between my-2">
      <p class="text-[#73B1F0] text-sm font-normal">
        {{ texts.comments.text }} ({{ comments.length }})
      </p>
      <p
        class="flex items-center gap-1 text-sm text-gray-400 font-extralight cursor-pointer"
        @click="addCommentModal"
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

  <UiKitsUiSlotsFormModelSlot
    form-title="Add Comment"
    @close-modal="addCommentModal"
    v-if="addAComment"
    v-model="addAComment"
    @closeDialog="addAComment = false"
  >
    <label class="font-bold" for="author">{{
      texts.bookFormModel.name
    }}</label>
    <UInput placeholder="Name" v-model="author" maxLength="100" />

    <label class="font-bold" for="message">{{
      texts.comments.message
    }}</label>
    <UTextarea
      placeholder="Message"
      :rows="10"
      v-model="message"
      maxLength="500"
    />

    <div class="flex justify-end">
      <UButton
        class="w-fit"
        color="blue"
        variant="solid"
        @click="addACommentSubmit"
      >
        {{ texts.bookFormModel.add }}
      </UButton>
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup>
import { encodeBase62 } from "@/utils/encodeBase62";
import texts from "@/texts/texts.json";

const addAComment = ref(false);
const author = ref("");
const message = ref("");

const addCommentModal = () => {
  addAComment.value = !addAComment.value;

  if (!addAComment.value) {
    author.value = "";
    message.value = "";
  }
};

const addACommentSubmit = () => {
  if (!author.value || !message.value) {
    console.error("All fields are required to add a bookmark.");
    return;
  }

  const uniqueId = encodeBase62(Date.now());

  addCommentModal();
};

const comments = ref([
  {
    id: 1,
    author: "Fiz Danielz",
    time: "1 hr ago",
    message: "Suspendisse eget sapien in sem cursus facilisis. Sed viverra felis non metus ullamcorper sollicitudin. Ut nec purus magna",
    likes: 12,
    user_replies: 1,
    replies: [
      {
        id: 2,
        author: "Jane Dee",
        time: "2 mins ago",
        message: "Sed viverra felis non metus ullamcorper sollicitudin. Ut nec purus magna. Mauris euismod ligula eget purus cursus sollicitudin.",
        likes: 2,
        user_replies: 0,
        replies: [],
      },
    ],
  },
]);
</script>
