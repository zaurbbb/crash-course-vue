<template>
  <div
    class="posts-list"
    v-if="posts.length > 0"
  >
    <h4>Posts about programming languages</h4>
    <transition-group name="posts-list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="removePost"
      />
    </transition-group>
  </div>
  <p
    style="color: red; font-weight: 700"
    v-else
  >
    No posts yet
  </p>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removePost(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style
  lang="scss"
  scoped
>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.3s;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.posts-list-move {
  transition: transform 0.4s;
}
</style>
