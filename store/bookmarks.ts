import { defineStore } from "pinia";
import type { Bookmark } from "@/types/types";

const BOOKMARKS_KEY = "da-browser-ex-bookmarks-list";
const defaultIcon = "i-ic-twotone-vpn-lock";
const iconMap: Record<string, string> = {
  Behance: "i-devicon-behance",
  Github: "i-devicon-github",
  Facebook: "i-devicon-facebook",
  AWS: "i-devicon-amazonwebservices-wordmark",
  Google: "i-devicon-google",
  Stackoverflow: "i-devicon-stackoverflow",
  Couchbase: "i-devicon-couchbase",
};

export const useBookmarksStore = defineStore("bookmarks", {
  state: () => ({
    bookmarks: [] as Bookmark[],
    createABookmarks: false,
    options: [] as Bookmark[],
    optionIndex: 0,
  }),
  getters: {
    getIconSrc: () => (label: string) => {
      return iconMap[label] || defaultIcon;
    },
  },
  actions: {
    loadBookmarks() {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
      if (storedBookmarks) {
        this.bookmarks = JSON.parse(storedBookmarks);
      }
    },
    saveBookmarks() {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(this.bookmarks));
    },
    addOption() {
      if (this.options.length < 27)
        this.options.push({
          id: Date.now() + this.optionIndex++,
          name: "",
          url: "",
        });
    },
    removeOption(index: number) {
      if (this.options.length > 1) this.options.splice(index, 1);
      else {
        this.options[index].name = "";
        this.options[index].url = "";
      }
    },
    createBookmarkModal() {
      this.createABookmarks = !this.createABookmarks;
      if (this.createABookmarks) {
        this.options = [...this.bookmarks];
      } else {
        this.options = [
          { id: Date.now() + this.optionIndex++, name: "", url: "" },
        ];
      }
    },
    createABookmarksubmit() {
      const newBookmarks = this.options
        .filter((option) => option.name && option.url)
        .map((option) => ({
          id: Date.now() + this.optionIndex++,
          name: option.name,
          url: option.url,
        }));

      // Remove bookmarks that are not in the incoming data
      this.bookmarks = this.bookmarks.filter((bookmark) =>
        newBookmarks.some((newBookmark) => newBookmark.name === bookmark.name)
      );

      // Add or update bookmarks
      newBookmarks.forEach((newBookmark) => {
        const existingIndex = this.bookmarks.findIndex(
          (bookmark) => bookmark.name === newBookmark.name
        );
        if (existingIndex !== -1) {
          this.bookmarks[existingIndex] = newBookmark;
        } else {
          this.bookmarks.push(newBookmark);
        }
      });

      this.saveBookmarks();
      this.createBookmarkModal();
    },
  },
});
