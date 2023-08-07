<template>
  <button
    v-bind="$attrs"
    :class="`button button-${color}`"
  >
    <slot />
    <img
      v-if="clearable"
      src="@/assets/close.svg"
      alt=""
    >
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});
defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  clearable: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.button {
  max-width: 100%;
  overflow: hidden;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 4px;
  appearance: none;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  word-wrap: break-word;

  &-primary {
    background-color: #862fde;
    &:hover {
      background-color: #9232F1;
    }
    &::active {
      background-color: #BB79FC;
    }
  }

  &-grey {
    background-color: #F6F6F9;
    color: #404144;
    &:hover {
      background-color: #EEEEF1;
    }
    &::active {
      background-color: #EEEEF1;
    }
  }

  &:hover {
    text-decoration: none;
    transition-duration: 0.1s;
  }

  &:active {
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  &:focus {
    outline: 1px transparent;
  }

  &:before {
    display: none;
  }

  &:-webkit-details-marker {
    display: none;
  }
}
</style>