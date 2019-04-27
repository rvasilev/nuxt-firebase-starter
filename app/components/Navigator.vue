<template>
  <nav class="main-menu">
    <nuxt-link to="/" class="menu-item">Home</nuxt-link>
    <div class="menu-item--separator">|</div>
    <nuxt-link to="/about" class="menu-item">About</nuxt-link>
  </nav>
</template>
<style lang="scss" scoped>
  @import "~assets/scss/colors";
  .main-menu {
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    background-color: #efefef;
    .menu-item {
      flex: 1;
      text-align: center;
      padding: 1rem 1rem;
      display: grid;
      &:hover {
        background-color: $theme-white;
      }
      &--separator {
        padding-left: .5rem;
        padding-right: .5rem;
      }
    }
    .nuxt-link-exact-active {
      color: $theme-secondary;
      font-weight: bold;
      text-decoration: underline;
    }
  }
</style>
<script>
  export default {
    name: 'navigator'
  }
</script>
