export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    hideModal(event) {
      event.preventDefault();
      this.$emit("update:modelValue", false);
    },
  },
  mounted() {
  }
}
