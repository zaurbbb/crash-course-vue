<template>
  <form @submit.prevent>
    <h3>Create post</h3>
    <div class="form-elements">
      <custom-input
        type="text"
        placeholder="Name"
        v-model="post.title"
        v-focus
      />
      <custom-input
        type="text"
        placeholder="Description"
        v-model="post.body"
      />
      <custom-button
        type="submit"
        @click="createPost"
      >
        Create
      </custom-button>
    </div>
  </form>
</template>

<script>

export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form-elements {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}
</style>
