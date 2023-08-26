import { API } from "../api/index.js";
import {
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";

export function usePosts(limit, page) {
  const posts = ref([]);
  const isLoading = ref(true);
  const postsCount = ref(0);

  const fetchData = async (limit, page) => {
    try {
      const queryParams = {
        params: {
          _page: page,
          _limit: limit,
        },
      };
      const response = await API(
        "/posts",
        queryParams,
      );
      postsCount.value = Number(response.headers["x-total-count"]);
      posts.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  watchEffect(() => {
    fetchData(limit.value, page.value);
  });

  return {
    posts,
    isLoading,
    postsCount,
  };
}
