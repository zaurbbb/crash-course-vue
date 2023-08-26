<template>
  <h1>Posts Page</h1>
  <custom-input
    placeholder="Search..."
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    v-focus
  />
  <custom-select
    :model-value="selectedSort"
    @update:model-value="setSelectedSort"
    :options="sortOptions"
  />
  <custom-button @click="showModal">
    Create post
  </custom-button>
  <custom-modal v-model="modalVisibility">
    <post-form @create="createPostFunction" />
  </custom-modal>
  <br />
  <post-list
    v-if="!isLoading"
    :posts="searchedAndSortedPosts"
    @remove="removePost"
  />
  <custom-loader v-else />
  <div
    class="observer"
    v-intersection="loadMorePosts"
  />
</template>

<script>
import PostForm from "@/modules/PostForm.vue";
import PostList from "@/modules/PostList.vue";
import { API } from "@/api/index.js";
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
} from "vuex";

export default {
  name: "PostsInfinityPage",
  components: { PostForm, PostList },
  data() {
    return {
      modalVisibility: false,
    };
  },
  methods: {
    ...mapMutations({
      createPost: "post/createPost",
      removePost: "post/removePost",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
      setPosts: "post/setPosts",
      setPage: "post/setPage",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    createPostFunction(post) {
      this.createPost(post)
      this.modalVisibility = false;
    },
    showModal() {
      this.modalVisibility = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      modificatorValue: (state) => state.post.modificatorValue,
      errorMessage: (state) => state.post.errorMessage,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      postsCount: (state) => state.post.postsCount,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchedAndSortedPosts: "post/searchedAndSortedPosts",
    }),
  },
};
</script>

<style scoped>
.observer {
  height: 10px;
  width: 90%;
  background-color: red;
  margin: 10px;
}
</style>


