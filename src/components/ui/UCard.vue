<script setup>
import UButton from '../ui/UButton.vue'
</script>
<template>
  <article class="card">
    <div class="card__image">
      <img src="@/assets/images/img-1.png" alt="image-caption" />
    </div>

    <div class="card__body">
      <h2 class="card__title">«Рождение Венеры» Сандро Боттичелли</h2>

      <div class="card__footer">
        <div class="card__price">
          <span class="card__price--old">2 000 000 $</span>
          1 000 000 $
        </div>
        <UButton><template #textButton>Купить</template></UButton>
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
    gap: 21px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
