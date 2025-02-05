<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BHeader from './components/blocks/BHeader.vue'
import BFooter from './components/blocks/BFooter.vue'
</script>

<template>
  <BHeader />
  <main class="page__main">
    <RouterView></RouterView>
  </main>
  <BFooter />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.page__body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: $font-family;
  font-size: 14px;
  position: relative;
}

.page__main {
  display: flex;
  justify-content: center;
  padding: 45px 30px;
  flex: 1;
}

.page__app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: $color-background;
}
</style>
