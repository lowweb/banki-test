<script setup>
import { ref } from 'vue'
const toogle = ref(false)
function toggleValue() {
  toogle.value = !toogle.value
}
</script>
<template>
  <div class="ham" :class="{ 'ham--open': toogle }" @click="toggleValue">
    <div class="ham__bar ham__bar1"></div>
    <div class="ham__bar ham__bar2"></div>
    <div class="ham__bar ham__bar3"></div>
  </div>
</template>

<style lang="scss">
.ham {
  display: inline-block;
  cursor: pointer;
  z-index: 3;

  &__bar {
    width: 35px;
    height: 4px;
    border-radius: 3px;
    background-color: $color-font-main;
    margin: 6px 0;
    transition: 0.4s;
  }

  &--open {
    & .ham__bar1 {
      transform: translate(0, 10px) rotate(-45deg);
    }

    & .ham__bar2 {
      opacity: 0;
    }

    & .ham__bar3 {
      transform: translate(0, -10px) rotate(45deg);
    }
  }
}
</style>
