<template>
  <button
    class="custom-button"
    :class="{
      'custom-button--danger': danger,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    danger: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style
  scoped
  lang="scss"
>
.custom-button {
  width: 150px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #eee;
  }

  &--danger {
    background-color: #d73b3b;
    color: #fff;

    &:hover {
      background-color: #d73b3b;
    }
  }
}
</style>
