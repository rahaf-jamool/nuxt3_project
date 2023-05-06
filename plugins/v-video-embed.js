import Embed from "v-video-embed";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("Embed", Embed);
});
