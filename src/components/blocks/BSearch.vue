<script setup>
import UButton from '../ui/UButton.vue'
import UInput from '../ui/UInput.vue'
</script>

<template>
  <div class="search">
    <UInput placeholder="Поиск по названию картины" type="text" class="search__input" />
    <UButton><template #textButton>Найти</template></UButton>
  </div>
</template>

<style lang="scss">
.search {
  display: flex;
  background-color: tomato;
  width: 100%;

  &__input {
    // max-width: 294px;
  }
}
</style>
