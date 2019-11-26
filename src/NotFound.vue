<template>
  <div class="not-found">
    <img class="not-found__logo" src="./assets/github.png" alt=""/>
    <p class="not-found__text">
      <span class="not-found__title">NO RESULTS FOUND</span>
      <span class="not-found__subtitle">select other parameters and try again</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style lang="scss">
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    min-height: 80vh;
    max-width: 450px;
    &__logo {
      width: 190px;
      height: 190px;
    }
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      font-family: Arial, sans-serif;
    }
    &__title {
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      font-weight: bold;
      color: #0366D6;
    }
    &__subtitle {
      font-size: 24px;
      line-height: 24px;
      text-align: center;
    }
  }
</style>
