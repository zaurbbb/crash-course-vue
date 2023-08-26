<template>
  <header class="header">
    <p>Vue 3 Crash Course</p>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts/pagination">Pagination</router-link>
      <router-link to="/posts/infinity">Infinity scroll</router-link>
      <router-link to="/posts/store">Vuex store</router-link>
      <router-link to="/posts/composition">Composition API</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style
  scoped
  lang="scss"
>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  & > .nav {
    display: flex;
    align-items: center;

    & > * {
      margin-left: 16px;
    }

    a {
      color: #000;

      text-decoration: none;

      &:hover {
        color: #727272;
      }
    }
  }
}
</style>
