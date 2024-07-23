<template>
  <div class="grid grid-cols-4 gap-5 mt-10">
    <BrowserActivitySourceLink
      v-for="(link, index) in bookmarksStore.bookmarks"
      :key="index"
      :to="link.url"
      :iconSrc="bookmarksStore.getIconSrc(link.name)"
      :label="link.name"
    />
    <p
      class="flex flex-col items-center gap-2 cursor-pointer"
      title="Add New Bookmark"
      @click="bookmarksStore.createBookmarkModal"
    >
      <span
        class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-sm p-2"
      >
        <img src="/assets/icons/plusIcon.svg" alt="arrow icon" />
      </span>
    </p>
  </div>

  <UiKitsUiSlotsFormModelSlot
    form-title="Create Bookmark"
    @close-modal="bookmarksStore.createBookmarkModal"
    v-if="bookmarksStore.createABookmarks"
    v-model="bookmarksStore.createABookmarks"
    @closeDialog="bookmarksStore.createBookmarkModal"
  >
    <div
      v-for="(option, index) in bookmarksStore.options"
      :key="index"
      class="flex items-center gap-5 py-2"
    >
      <span>{{ index + 1 }}.</span>
      <div class="flex gap-5 rounded-2xl pr-2 items-center flex-grow">
        <UInput
          size="sm"
          class="w-full lg:w-40vw"
          v-model="option.name"
          placeholder="Name"
          maxLength="10"
        />
        <UInput
          size="sm"
          class="w-full lg:w-40vw"
          v-model="option.url"
          placeholder="http://example.com"
          type="url"
        />
        <img
          src="/assets/icons/deleteIcon.svg"
          alt="delete"
          class="cursor-pointer"
          @click="bookmarksStore.removeOption(index)"
        />
      </div>
    </div>

    <UButton
      v-if="bookmarksStore.options.length < 27"
      size="sm"
      color="gray"
      variant="ghost"
      trailing-icon="i-heroicons-plus-20-solid"
      class="rounded-2xl px-6 w-16"
      @click="bookmarksStore.addOption"
    />

    <div class="flex justify-end">
      <UButton
        class="w-fit"
        color="blue"
        variant="solid"
        @click="bookmarksStore.createABookmarksubmit"
        >{{ texts.bookFormModel.add }}</UButton
      >
    </div>
  </UiKitsUiSlotsFormModelSlot>
</template>

<script setup lang="ts">
import { useBookmarksStore } from "@/store/bookmarks";
import texts from "@/texts/texts.json";

const bookmarksStore = useBookmarksStore();

onMounted(() => {
  bookmarksStore.loadBookmarks();
});
</script>
