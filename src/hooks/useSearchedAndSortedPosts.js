import {
  computed,
  ref,
} from "vue";

export default function useSearchedAndSortedPosts(sortedPosts) {
  const searchQuery = ref("");

  const searchedAndSortedPosts = computed(() => {
    return sortedPosts.value.filter((post) => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
  });

  return {
    searchQuery,
    searchedAndSortedPosts,
  };
}
