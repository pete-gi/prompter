<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cog</v-icon>
      </v-list-item-icon>
      <v-list-item-title> Ustawienia </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-container>
        <v-row>
          <v-col direction="column">
            <v-list-item-title> Kolor tła </v-list-item-title>
            <v-color-picker
              width="224px"
              hide-inputs
              v-model="backgroundColor"
            ></v-color-picker>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
    <v-list-item>
      <v-container>
        <v-row>
          <v-col direction="column">
            <v-list-item-title> Kolor tekstu </v-list-item-title>
            <v-color-picker
              width="224px"
              hide-inputs
              v-model="fontColor"
            ></v-color-picker>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
    <v-list-item>
      <v-container>
        <v-row>
          <v-col direction="column">
            <v-list-item-title> Rozmiar tekstu </v-list-item-title>
            <v-slider
              :hint="`${fontSize}px`"
              persistent-hint
              min="12"
              max="256"
              step="4"
              v-model="fontSize"
            ></v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
    <v-list-item>
      <v-container>
        <v-row>
          <v-col direction="column">
            <v-switch label="Pogrubienie tekstu" v-model="fontBold"></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    backgroundColor: {
      get() {
        return this.$store.state.backgroundColor;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "backgroundColor",
          value,
        });
      },
    },
    fontColor: {
      get() {
        return this.$store.state.fontColor;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "fontColor",
          value,
        });
      },
    },
    fontSize: {
      get() {
        return this.$store.state.fontSize;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "fontSize",
          value,
        });
      },
    },
    fontBold: {
      get() {
        return this.$store.state.fontBold;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "fontBold",
          value,
        });
      },
    },
  },
};
</script>
