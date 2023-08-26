<template>
  <div class="custom-pagination">
    <div
      class="custom-pagination__item"
      v-for="pageNumber in pagesCount"
      @click="handlePageChange(pageNumber)"
      :key="pageNumber"
      :class="{
        'custom-pagination__item--active': pageNumber === page,
      }"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomPagination",
  props: {
    count: {
      type: Number,
      default: 100,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handlePageChange(newValue) {
      this.$emit("update:page", newValue);
    },
  },
  mounted() {

  },
  computed: {
    pagesCount() {
      return Math.ceil(this.count/this.limit);
    },
  },
};
</script>

<style
  scoped
  lang="scss"
>
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  &__item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;

    &--active {
      background-color: #3f5757;
      color: #ffffff;
    }
  }
}
</style>
