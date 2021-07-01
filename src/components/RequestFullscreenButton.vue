<template>
  <v-btn class="mr-2" @click="requestFullscreen">
    <v-icon class="mr-2">{{
      isFullscreen ? "mdi-close" : "mdi-open-in-new"
    }}</v-icon>
    Pełny ekran
  </v-btn>
</template>

<script>
export default {
  name: "RequestFullscreenButton",

  created() {
    if (document.fullscreenElement) {
      this.isFullscreen = true;
    }
  },

  data: () => ({
    isFullscreen: false,
  }),

  methods: {
    async requestFullscreen() {
      if (this.isFullscreen) {
        document.exitFullscreen();
        this.isFullscreen = false;
      } else {
        try {
          await document.body.requestFullscreen();
          this.isFullscreen = true;
        } catch (error) {
          this.isFullscreen = false;
        }
      }
    },
  },
};
</script>
