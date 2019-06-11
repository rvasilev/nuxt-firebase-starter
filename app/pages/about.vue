<template>
  <page-container>
    <div class="page-content grid-12--centered-10">
      <h1>About</h1>
      <div class="logo">
        <img class="logo-svg" src="/imgs/svg/Logolp741color.svg">
      </div>
      <p>
        coming soon ...
      </p>
    </div>
  </page-container>
</template>
<style lang="scss" scoped>
  .page-content {
    .logo {
      width: 200px;
      height: 200px;
      overflow: hidden;
      .logo-svg {
        width: 100%;
        object-fit: contain;
      }
    }
  }
</style>
<script>
  import PageContainer from '~/components/PageContainer'
  export default {
    components: {
      PageContainer
    }
  }
</script>
