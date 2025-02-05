<script setup>
import UCard from '../components/ui/UCard.vue'
</script>

<template>
  <section class="content">
    <h1 class="content__title">Картины эпохи Возрождения</h1>
    <div class="content__body">
      <UCard />
      <UCard />
      <UCard />
      <UCard />
    </div>
  </section>
</template>

<style lang="scss">
.content {
  max-width: 1216px;
  display: flex;
  flex-direction: column;

  &__title {
    font-family: $font-family;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: $color-font-main;
    margin-bottom: 39px;
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    @media screen and (max-width: 1275px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 665px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
