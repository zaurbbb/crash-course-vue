<template>
  <select
    class="custom-select"
    :value="modelValue"
    @change="handleOptionChange"
  >
    <option
      value=""
      disabled
    >
      Choose the option
    </option>
    <option
      v-for="option in options"
      :value="option.value"
      :key="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleOptionChange(event) {
      console.log(event.target.value);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.custom-select {
  width: 150px;
  height: 40px;
  margin: 0 20px;
  padding: 10px;
}
</style>
