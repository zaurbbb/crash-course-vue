import { createApp } from "vue";
import components from "@/shared";
import App from "./app/App.vue";
import { router } from "./router/index.js";
import VIntersection from "./directives/VIntersection.js";
import directives from "./directives/index.js";
import store from "./store/index.js";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app
  .use(store)
  .use(router)
  .mount("#app");
