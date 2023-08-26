<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import PostsPaginationPage from "../pages/PaginationPosts.vue";
import PostsInfinityPage from "../pages/InfinityPosts.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "App",
  components: { Navbar, PostsInfinityPage, PostsPaginationPage },
};
</script>

<style>
.app {
  font-family: 'Roboto', sans-serif;
}
</style>
