<template>
  <div
    class="dialog"
    v-if="modelValue"
    @click.stop="hideModal"
  >
    <div
      class="dialog__content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../mixins/toggleMixin.js";

export default {
  name: "CustomModal",
  mixins: [toggleMixin],
};
</script>

<style
  scoped
  lang="scss"
>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
  }
}
</style>
