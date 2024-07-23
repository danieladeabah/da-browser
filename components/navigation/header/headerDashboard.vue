<template>
  <div
    class="flex flex-col gap-2 items-center justify-center mt-5 lg:mt-30 mx-5"
  >
    <img
      src="/assets/icons/adeabah-high-resolution-logo-black.svg"
      alt="logo"
      class="m-5"
    />
    <div
      class="flex flex-col items-center gap-5 w-full bg-[#F5F5F5] rounded-3xl"
    >
      <div
        class="flex items-center gap-5 w-full bg-[#F5F5F5] px-5 py-2 rounded-2xl"
      >
        <input
          type="search"
          v-model="searchQuery"
          :placeholder="
            isListening ? 'Listening... 🎙️' : 'Search or type address'
          "
          class="w-full bg-[#F5F5F5] border-0 outline-none"
          @keydown.enter="handleSearch"
        />
        <img
          src="/assets/icons/microphoneIcon.svg"
          alt="search icon"
          class="w-5 h-5 cursor-pointer"
          title="Voice Search"
          @click="startVoiceRecognition"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref<string>("");
const isListening = ref<boolean>(false);

const isValidUrl = (url: string): boolean => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
};

const handleSearch = (): void => {
  const query = searchQuery.value.trim();
  if (query) {
    if (isValidUrl(query)) {
      window.location.href = query.startsWith("http")
        ? query
        : `http://${query}`;
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
  } else {
    console.log("Search query is empty. Please enter a search term.");
  }
};

// Start voice recognition
const startVoiceRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error("Speech Recognition API not supported.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  isListening.value = true;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const results = event.results as SpeechRecognitionResultList;
    if (results.length > 0 && results[0].length > 0) {
      const voiceQuery = results[0][0].transcript.trim();
      searchQuery.value = voiceQuery;
      if (voiceQuery) {
        handleSearch();
      }
    }
  };

  recognition.onerror = (event: SpeechRecognitionEvent) => {
    console.error("Speech recognition error:", event.error);
  };

  recognition.onend = () => {
    isListening.value = false;
    console.log("Speech recognition service disconnected");
  };

  recognition.start();
};
</script>
