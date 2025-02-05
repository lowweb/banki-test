<script setup>
import BMenu from '../blocks/BMenu.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconAdress from '../icons/IconAdress.vue'
</script>
<template>
  <footer class="footer">
    <div class="footer__body">
      <BMenu class="footer__menu" />

      <div class="footer__info">
        <span class="footer__phone">
          <IconPhone />
          <a class="footer__link" href="tel:+78125555555">+7 (812) 555-55-55</a>
        </span>

        <span class="footer__adress">
          <IconAdress />
          <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  background-color: #eceaea;
  padding: 0 30px;

  &__menu {
    @media screen and (max-width: 1115px) {
      display: none;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    max-width: 1213px;
    padding: 0 30px;
    font-family: $font-family;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #555;
    width: 100%;
    padding: 38px 0 37px 96px;
    @media screen and (max-width: 1115px) {
      padding: 38px 0 37px 0px;
    }
  }

  &__info {
    display: flex;
    gap: 51px;
    @media screen and (max-width: 555px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__phone {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #555;

    & svg {
      fill: #555;
    }
    &:hover {
      color: #845757;

      & svg {
        fill: #845757;
      }
    }
  }

  &__adress {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
