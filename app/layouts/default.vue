<template>
  <div>
    <navigator></navigator>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import "~assets/scss/colors";

  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a,
  a:visited,
  a:hover {
    text-decoration: none;
    color: $theme-primary;
  }

  a:hover {
    opacity: .9;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $theme-primary;
    color: $theme-primary;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: $theme-primary;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $theme-secondary;
    color: $theme-secondary;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: $theme-secondary;
  }

</style>

<script>
  import Navigator from '~/components/Navigator'
  export default {
    components: {
      Navigator
    }
  }
</script>
