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
    :page="page"
    @update:page="updatePage"
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
import { ref } from "vue";
import { usePosts } from "../hooks/usePosts.js";
import useSortedPosts from "../hooks/useSortedPosts.js";
import useSearchedAndSortedPosts from "../hooks/useSearchedAndSortedPosts.js";

export default {
  name: "CompositionPosts",
  components: { PostForm, PostList },
  setup() {
    const page = ref(1);
    const modalVisibility = ref(false);
    const sortOptions = ref([
      {
        value: "title",
        name: "By title",
      }, {
        value: "body",
        name: "By description",
      },
    ]);

    const showModal = () => modalVisibility.value = true;
    const {
      posts,
      isLoading,
      postsCount,
    } = usePosts(10, page);
    const {
      sortedPosts,
      selectedSort,
    } = useSortedPosts(posts);
    const {
      searchQuery,
      searchedAndSortedPosts,
    } = useSearchedAndSortedPosts(sortedPosts);

    const updatePage = (newPage) => {
      page.value = newPage;
      console.log(page.value);
    };
    const createPost = (post) => {
      posts.value.push(post);
    };
    const removePost = (id) => {
      posts.value = posts.value.filter((post) => post.id !== id);
    };

    return {
      page,
      modalVisibility,
      sortOptions,
      posts,
      isLoading,
      postsCount,
      selectedSort,
      searchQuery,
      searchedAndSortedPosts,
      showModal,
      updatePage,
      createPost,
      removePost,
    };
  },
};
</script>

<style scoped>

</style>
