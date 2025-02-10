<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { useCardsStore } from '@/stores/cardsStore'
const cardsStore = useCardsStore()
import UPopup from '../components/ui/UPopup.vue'
import UButton from '../components/ui/UButton.vue'
import USlider from '../components/ui/USlider.vue'

const closePopup = () => {
  router.push('/')
}
</script>
<template>
  <UPopup class="info-view">
    <template #caption>
      <div class="info-view__row info-view__title">Название</div>
      <div class="info-view__row">{{ cardsStore.activeCard.title }}</div>
    </template>
    <template #body>
      <div class="info-view__row info-view__title">Цена</div>
      <div class="info-view__row">{{ cardsStore.activeCard.price }}</div>
      <div class="info-view__row"><USlider :images="cardsStore.activeCard.images" /></div>
    </template>
    <template #footer>
      <UButton @click="closePopup"><template #textButton>Закрыть</template></UButton>
    </template>
  </UPopup>
</template>

<style lang="scss">
.info-view {
  & .popup__body {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 50px;
  }

  & .popup__caption {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__row {
    display: flex;
  }

  &__title {
    font-weight: 700;
  }
  & .popup__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
