<template>
  <div class="post">
    <div class="post__data">
      <div class="post__id"><strong>ID:</strong> {{ post.id }}</div>
      <div class="post__title"><strong>Name:</strong> {{ post.title }}</div>
      <div class="post__body"><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <custom-button
        danger
        @click="removePost"
      >
        Delete
      </custom-button>
      <custom-button @click="goToPost">
        Go to post
      </custom-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removePost() {
      this.$emit("remove", this.post.id);
    },
    goToPost() {
      this.$router.push(`/posts/${this.post.id}`);
    },
  },
};
</script>

<style
  scoped
  lang="scss"
>
.post {
  border: 1px solid #000;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 18px;
  }

  &__body {
    font-size: 16px;
  }

  &__btns {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
