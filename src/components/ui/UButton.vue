<script setup>
const props = defineProps({})
</script>

<template>
  <button class="button">
    <span v-if="$slots.iconButton" class="button__icon">
      <slot name="iconButton" />
    </span>

    <slot name="textButton"></slot>
  </button>
</template>

<style lang="scss">
.button {
  font-family: $font-family;
  font-weight: 700;
  font-size: 14px;
  // line-height: 150%;
  line-height: 21px;
  text-align: center;
  color: #f4f6f9;
  padding: 13px 30px 14px 31px;
  background-color: $color-brown;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background-color: $color-brown-light2;
  }

  &:hover {
    background-color: $color-brown-light2;
  }

  &__icon {
    margin-right: 4px;
    display: flex;
  }
}
</style>
