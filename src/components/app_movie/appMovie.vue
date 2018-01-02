<template>
  <div class="app-movie app-box">
    <div class="film-list-nav">
      <router-link :to="{name: 'showing'}">
        <div class="nav-item film-showing">正在热映</div>
      </router-link>
      <router-link :to="{name: 'toshow'}">
        <div class="nav-item film-toshow">即将上映</div>
      </router-link>
    </div>

    <div class="film-content">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
  import AppShowingFilm from './app_showing_film'
  import AppToshowFilm from './app_toshow_film'

  export default {
    name: 'app-movie',
    components: {
      AppShowingFilm,
      AppToshowFilm
    }
  }
</script>


<style lang="scss" scoped>
  .app-movie{
    background: #fff;
    width: 3.45rem;
    height: 100%;
    margin: auto;
    left: 0;
    right: 0;
    .film-list-nav{
      margin: 0 auto;
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #fe6e00;
      .nav-item{
        height: 100%;
        width: 1.725rem;
        text-align: center;
        font-size: 16px;
        color: #6a6a6a;
        line-height: 45px;
      }
      .router-link-active{
        div{
          color: #fe6e00;
        }
        border-bottom: 3px solid #fe6e00;
      }
    }
  }

</style>
