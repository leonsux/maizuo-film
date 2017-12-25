<template>
  <div class="app-main app-box">
    <app-banner></app-banner>
    <app-main-showing></app-main-showing>
    <app-main-toshow></app-main-toshow>
  </div>
</template> 

<script>
  import AppBanner from './appBanner'
  import AppMainShowing from './app_main_showing/appMainShowing'
  import AppMainToshow from './app_main_toshow/appMainToshow'

  export default {
    name: 'app-main',
    components: {
      AppBanner,
      AppMainShowing,
      AppMainToshow
    }
  }
</script>
<style >
  .app-main{
    background: #EBEBEB;
  }
</style>
