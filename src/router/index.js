import {
  createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  }, {
    path: "/posts/pagination",
    component: () => import("../pages/PaginationPosts.vue"),
  }, {
    path: "/posts/infinity",
    component: () => import("../pages/InfinityPosts.vue"),
  }, {
    path: "/posts/store",
    component: () => import("../pages/StorePosts.vue"),
  }, {
    path: "/posts/composition",
    component: () => import("../pages/CompositionPosts.vue"),
  }, {
    path: "/posts/:id",
    component: () => import("../pages/SinglePost.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
