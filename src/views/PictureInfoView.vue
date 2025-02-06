<script setup>
import UPopup from '../components/ui/UPopup.vue'
import UButton from '../components/ui/UButton.vue'
</script>
<template>
  <UPopup class="order-view">
    <template #caption>jlkjkjlk</template>
    <template #body>
      <div class="order-view__row">jnkjnkjnkj</div>
    </template>
    <template #footer>
      <UButton>Сохранить</UButton>
    </template>
  </UPopup>
</template>

<style lang="scss">
.order-view {
  & .popup__body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 24px;
  }
  &__row {
    display: flex;
    gap: 16px;
  }
  & .popup__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
