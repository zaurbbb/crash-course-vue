<template>
  <input
    class="custom-input"
    type="text"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style
  scoped
  lang="scss"
>
.custom-input {
  width: 250px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  background-color: #fff;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid #000;
  }
}
</style>
