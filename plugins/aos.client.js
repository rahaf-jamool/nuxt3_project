import aos from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.component( "aos", aos );
    aos.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
});
