<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#" class="menu__link">Каталог</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Доставка</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Оплата</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">Контакты</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link">О компании</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  display: flex;
  align-items: center;
  &__list {
    display: flex;
    gap: 48px;
    list-style: none;
  }

  &__item {
    flex: 1 0 auto;
  }

  &__link {
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $color-font-main;

    &:hover {
      color: $color-font-hover;
    }

    // &:active {
    //   color: $color-font-hover;
    // }
  }
}
</style>
