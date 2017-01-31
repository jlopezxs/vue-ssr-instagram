<template>
  <article class="card">
    <header class="card__header">
      <img class="avatar" :src="item.avatar">
    </header>
    <div class="card__body">
      <img class="card__img" :src="item.imageSrc"/>
    </div>
  </article>
</template>

<script>
export default {
  name: 'photos-item',
  props: ['item']
}
</script>
<style lang="sass" scoped>
  $color-border: #EEE;
  $color-background: #FFF;

  .card {
    & {
      overflow: hidden;
      position: relative;
    }
    &__header {
      position: absolute;
      background-color: #FFF;
      border-bottom: 1px solid rgba(0,0,0,.0975);
      width: 100%;
      top: -60px;
      padding: 14px 20px;
      display: flex;
      flex-direction: column;
    }
    &:hover {
      .card__header {
        top: 0px;
        transition: top 0.2s;
      }
    }
    &__body {
      display: flex;
      flex-direction: column;
    }
    &__img {
      width: 100%;
      height: auto;

    }
    &__username {
      float:left;
    }
  }

  .avatar {
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 28px;
    float:left;
  }
</style>
