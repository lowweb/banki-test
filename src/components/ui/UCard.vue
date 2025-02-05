<script setup>
import { computed } from 'vue'
import UButton from '../ui/UButton.vue'
import IconCheck from '../icons/IconCheck.vue'
import getImageUrl from '@/utils/getImgUrl'
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  img: {
    type: String,
    required: true,
    default: '',
  },
  price: {
    type: String,
    required: false,
    default: '',
  },
  oldprice: {
    type: String,
    required: false,
    default: '',
  },
  status: {
    type: String,
    required: false,
    default: '',
  },
})

const imgUrl = computed(() => getImageUrl('../assets/images/', props.img))
const buttonName = computed(() => (props.status === 'trash' ? 'В корзине' : 'Купить'))
</script>
<template>
  <article class="card" :class="{ 'card--sold': status === 'sold' }">
    <div class="card__image">
      <img :src="imgUrl" alt="image-caption" />
    </div>

    <div class="card__body">
      <h2 class="card__title">{{ title }}</h2>

      <div class="card__footer">
        <div class="card__footer--sold" v-if="status === 'sold'">Продана на аукционе</div>
        <div class="card__price" v-if="status != 'sold'">
          <span class="card__price--old">{{ oldprice }}</span>
          {{ price }}
        </div>
        <UButton v-if="status != 'sold'">
          <template #iconButton v-if="status === 'trash'"><IconCheck /></template>
          <template #textButton>{{ buttonName }}</template>
        </UButton>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.card {
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 20px;
  max-width: 280px;
  border: 1px solid $color-light-grey;

  &--sold {
    opacity: 0.6;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom: 1px solid $color-light-grey;

    & img {
      object-fit: cover;
    }
  }

  &__body {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    padding: 0 23px 23px 23px;
  }

  &__title {
    font-family: $font-family;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: $color-font-main;
  }

  &__price {
    display: flex;
    flex-direction: column;
    font-family: $font-family;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: $color-font-main;
    flex: 1 0 auto;

    &--old {
      font-family: $font-family;
      font-weight: 300;
      font-size: 14px;
      line-height: 150%;
      text-decoration: line-through;
      color: $color-grey;
    }
  }

  &__footer {
    margin-top: 23px;
    display: flex;
    // gap: 21px;
    align-items: center;
    justify-content: space-between;

    &--sold {
      font-family: $font-family;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: $color-font-main;
      margin-top: 12px;
    }
  }
}
</style>
