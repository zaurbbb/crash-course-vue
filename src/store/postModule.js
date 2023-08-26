import { API } from "../api/index.js";

export const postModule = {
  namespaced: true,
  state: () => ({
    posts: [],
    isLoading: false,
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]));
    },
    searchedAndSortedPosts(state, getters) {
      return getters.sortedPosts.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setModificatorValue(state, value) {
      state.modificatorValue = value;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setPostsCount(state, postsCount) {
      state.postsCount = postsCount;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const queryParams = {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        };
        const response = await API(
          "/posts",
          queryParams,
        );
        commit("setPostsCount", response.headers["x-total-count"]);
        commit("setPosts", response.data);
      } catch (error) {
        this.errorMessage = error.message;
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      if (state.page < state.postsCount) {
        commit("setPage", state.page + 1);
      } else {
        return;
      }

      try {
        const queryParams = {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        };
        const response = await API(
          "/posts",
          queryParams,
        );
        commit("setPostsCount", response.headers["x-total-count"]);
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (error) {
        commit("setErrorMessage", error.message);
        console.log(error);
      }
    },
  },
  modules: {},
};
