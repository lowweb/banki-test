<script setup>
import { ref, defineProps } from 'vue'
import getImageUrl from '@/utils/getImgUrl'
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentImage = ref(0)

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % props.images.length
}

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div class="slider">
    <div class="slider__content">
      <img :src="getImageUrl('../assets/images/', images[currentImage])" alt="Image" />
    </div>
    <div class="slider__nav">
      <button @click="prevImage" class="slider__button slider__button--left"></button>
      <button @click="nextImage" class="slider__button slider__button--right"></button>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  display: flex;
  width: 100%;
  position: relative;

  &__content {
    width: 100%;
    height: auto;

    & img {
      width: 100%;
    }
  }

  &__nav {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    display: flex;
    justify-content: space-between;
    width: 90%;
    justify-self: anchor-center;
  }

  &__button {
    border: solid 3px #ffffff;
    border-right: none;
    border-bottom: none;
    background-color: transparent;
    width: 20px;
    height: 20px;

    &:hover {
      width: 25px;
      height: 25px;
    }

    &--left {
      transform: rotate(-45deg);
    }

    &--right {
      transform: rotate(135deg);
    }
  }
}
</style>
