<template>
  <v-container fluid :style="`color: ${fontColor}`">
    <v-row>
      <v-col>
        <p
          :style="`font-size: ${fontSize}px; font-weight: ${
            fontBold ? 700 : 400
          }`"
          v-html="textareaValue"
        ></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Prompter",

  created() {
    this.toggleScroll(false);
  },

  mounted() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        this.paused = !this.paused;
      }
      if (e.code === "Escape") {
        e.preventDefault();
        this.$router.replace("/");
      }
    });
  },

  data: () => ({
    interval: undefined,
  }),

  watch: {
    paused(value) {
      this.toggleScroll(!value);
    },
  },

  computed: {
    paused: {
      get() {
        return this.$store.state.paused;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "paused",
          value,
        });
      },
    },
    scrollSpeed() {
      return this.$store.state.scrollSpeed;
    },
    fontSize() {
      return this.$store.state.fontSize;
    },
    fontColor() {
      return this.$store.state.fontColor;
    },
    fontBold() {
      return this.$store.state.fontBold;
    },
    textareaValue() {
      return this.$store.state.textareaValue.replace(/\n\r?/g, "<br>");
    },
  },

  methods: {
    toggleScroll(value) {
      this.clearScroll();
      if (value) {
        this.interval = setInterval(() => {
          window.scrollBy({
            top: (this.scrollSpeed + 1) / 2,
            behavior: "auto",
          });
        }, 30);
      }
    },
    clearScroll() {
      clearInterval(this.interval);
      this.interval = undefined;
    },
  },
};
</script>
