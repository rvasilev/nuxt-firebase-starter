<template>
  <div class="layout-container">
    <navigator></navigator>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import "~assets/scss/colors";
  @import "~assets/scss/mixins";

  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: #efefef;
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

  $grid-columns: 12;
  @include gridTemplates($grid-columns);

  .grid-v-align-start {
    align-items: start;
  }
  .grid-v-align-center {
    align-items: center;
  }
  .grid-v-align-end {
    align-items: end;
  }

  .page-container {
    min-height: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }

  .layout-container {
    background-color: $theme-white;
    min-height: 100vh;
  }
  .boxed {
    max-width: 1620px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<script>
  import Navigator from '~/components/Navigator'
  export default {
    components: {
      Navigator
    },
    head() {
      return {
        bodyAttrs: {
          class: 'boxed'
        }
      }
    }
  }
</script>
