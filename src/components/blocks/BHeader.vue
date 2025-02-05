<script setup>
import BMenu from './BMenu.vue'
import BSearch from './BSearch.vue'
import UHamMenu from '../ui/UHamMenu.vue'
</script>
<template>
  <header class="header">
    <div class="header__body">
      <UHamMenu class="header__ham-menu" />
      <BMenu class="header__menu" />
      <BSearch />
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  justify-content: center;
  padding: 0 30px;

  &__menu {
    @media screen and (max-width: 1115px) {
      display: none;
    }

    &--open {
      position: fixed;
      top: 123px;
      width: 70%;
      left: 0;
      height: 100vh;
      background-color: aliceblue;
      display: flex;
      /* flex-direction: column; */
      padding: 20px;
      align-items: flex-start;
    }
  }

  &__ham-menu {
    display: none;
    @media screen and (max-width: 1115px) {
      display: block;
    }
  }

  &__body {
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 37px 0 37px 96px;
    width: 100%;
    gap: 167px;
    @media screen and (max-width: 1115px) {
      padding: 37px 0 37px 0px;
      gap: 50px;
    }
  }
}

.ham--open + .header__menu {
  position: absolute;
  top: -50%;
  width: 100%;
  left: 0;
  height: 30%;
  background-color: #c1b4b1;
  display: flex;
  padding: 100px 20px 20px 30px;
  align-items: flex-start;
  z-index: 2;
  animation: slide 0.3s forwards;
  transition: top 4s ease-in-out 1s;

  & .menu__link {
    color: #ffffff;
  }

  & .menu__list {
    flex-direction: column;
    gap: 15px;
  }
}

@keyframes slide {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}
</style>
