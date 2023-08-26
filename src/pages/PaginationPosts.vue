<template>
  <h1>Posts Page</h1>
  <custom-input
    placeholder="Search..."
    v-model="searchQuery"
  />
  <custom-select
    v-model="selectedSort"
    :options="sortOptions"
  />
  <custom-button @click="showModal">
    Create post
  </custom-button>
  <custom-modal v-model="modalVisibility">
    <post-form @create="createPost" />
  </custom-modal>
  <br />
  <custom-pagination
    v-model:page="page"
    :count="postsCount"
  />
  <post-list
    v-if="!isLoading"
    :posts="searchedAndSortedPosts"
    @remove="removePost"
  />
  <custom-loader v-else />
</template>

<script>
import PostForm from "@/modules/PostForm.vue";
import PostList from "@/modules/PostList.vue";
import { API } from "@/api/index.js";

export default {
  name: "PaginationPosts",
  components: { PostForm, PostList },
  data() {
    return {
      posts: [],
      isLoading: false,
      modalVisibility: false,
      modificatorValue: "",
      errorMessage: "",
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      postsCount: 0,
      sortOptions: [
        {
          value: "title",
          name: "By title",
        }, {
          value: "body",
          name: "By description",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisibility = false;
    },
    removePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    showModal() {
      this.modalVisibility = true;
    },
    async fetchPosts() {
      try {
        this.isLoading = true;
        const queryParams = {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        };
        const response = await API(
          "/posts",
          queryParams,
        );
        this.postsCount = response.headers["x-total-count"];
        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
    },
    searchedAndSortedPosts() {
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
};
</script>

<style scoped>

</style>
