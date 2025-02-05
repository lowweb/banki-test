<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    class="input"
    @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 12px 60px 13px 16px;
  font-family: $font-family;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #343030;
  border: 1px solid #e1e1e1;

  &::placeholder {
    color: #9f9f9f;
  }
  &:focus {
    outline: none;
    border: 1px solid #b5b5b5;
  }
}
</style>
