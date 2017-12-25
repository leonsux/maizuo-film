<template>
    <div class="app-nav" >
      <ul>
        <li @click="touchNavItem(item.routerName)" v-for="item in navItems" :key="item.navId">
          <a class="nav-item" href="javascipt:;">
            <span>{{item.content}}</span>
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
</template> 

<script>
  export default {
    name: 'app-nav',
    props: ['changeIsNavShow'],
    data () {
      return {
        navItems: [
          {navId: 1, content: '首页', routerName: 'appMain'},
          {navId: 2, content: '影片', routerName: 'appMovie'},
          {navId: 3, content: '影院', routerName: 'appMovie'},
          {navId: 4, content: '我的', routerName: 'appMovie'}
        ]
      }
    },
    methods: {
      touchNavItem (routerName) {
        this.changeIsNavShow()
        this.$router.push({name: routerName})
      }
    }
  }
</script>
<style lang="scss">
  .app-nav{
    position: fixed;
    top: 49px;
    background: #282828;
    height: 100%;
    width: 2.65rem;
    z-index: 400;
    animation-duration: 0.5s;
    .nav-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.16rem;
      height: 0.5rem;
      border-bottom: 1px dotted #333;
    }
  }
</style>
