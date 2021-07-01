<template>
  <v-app>
    <v-app-bar app dark flat :color="navbarColor">
      <template v-if="!isPrompterRoute">
        <v-btn color="secondary" @click="sidebarOpened = !sidebarOpened">
          <v-icon class="mr-3">mdi-cog</v-icon>
          Konfiguruj</v-btn
        >
        <v-spacer> </v-spacer>
        <request-fullscreen-button></request-fullscreen-button>
        <v-btn to="/prompter" color="success" right>Otwórz prompter</v-btn>
      </template>
      <template v-else>
        <v-row align="center" wrap>
          <v-col class="xs-3" align="center">
            <v-slider
              :label="`Szybkość: ${scrollSpeed}`"
              min="1"
              max="10"
              hide-details
              v-model="scrollSpeed"
            ></v-slider>
          </v-col>
          <v-col class="xs-3 sm-6" align="center">
            <v-btn v-show="!paused" class="mr-2" @click="togglePaused(true)">
              <v-icon class="mr-2">mdi-pause</v-icon>
              Wstrzymaj
            </v-btn>
            <v-btn v-show="paused" @click="togglePaused(false)">
              <v-icon class="mr-2">mdi-play</v-icon>
              Włącz
            </v-btn>
          </v-col>
          <v-col class="xs-3" align="end">
            <request-fullscreen-button></request-fullscreen-button>
            <v-btn v-show="isPrompterRoute" to="/" color="secondary" right
              >Zamknij prompter</v-btn
            >
          </v-col>
        </v-row>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-if="!isPrompterRoute"
      app
      overlay-color="#000"
      v-model="sidebarOpened"
    >
      <settings></settings>
    </v-navigation-drawer>

    <v-main
      :style="`background-color: ${
        isPrompterRoute ? backgroundColor : 'white'
      }`"
      @keydown.prevent.space="togglePaused"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import RequestFullscreenButton from "./components/RequestFullscreenButton.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "App",

  components: {
    RequestFullscreenButton,
    Settings,
  },

  data: () => ({
    sidebarOpened: true,
  }),

  computed: {
    backgroundColor() {
      return this.$store.state.backgroundColor;
    },
    isPrompterRoute() {
      return this.$route.name.includes("Prompter");
    },
    navbarColor() {
      return this.isPrompterRoute ? this.backgroundColor : "primary";
    },
    scrollSpeed: {
      get() {
        return this.$store.state.scrollSpeed;
      },
      set(value) {
        this.$store.commit("setValue", {
          name: "scrollSpeed",
          value,
        });
      },
    },
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
  },

  methods: {
    togglePaused(paused = undefined) {
      if (this.isPrompterRoute) {
        if (typeof paused === "string") {
          this.paused = paused;
        } else {
          this.paused = !this.paused;
        }
      }
    },
  },
};
</script>
