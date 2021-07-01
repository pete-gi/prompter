<template>
  <v-container>
    <v-row>
      <v-col>
        <v-textarea
          label="Treść"
          hide-details
          auto-grow
          rows="20"
          v-model="textareaValue"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  computed: {
    textareaValue: {
      get() {
        return this.$store.state.textareaValue;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "textareaValue",
          value,
        });
      },
    },
  },
};
</script>
