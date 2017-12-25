<template>
  <div class="app-header">
    <div class="header-left">
      <div @click="changeIsNavShow" class="sq-icon" style="border-right: 1px solid #222;">
        <i class="fa fa-navicon"></i>
      </div>
      <div class="header-title"><span>卖座电影</span></div>
    </div>
    <!--  -->
    <div class="header-right">
      <div class="locations">
        <span>北京</span>
        <i class="fa fa-angle-down"></i>
      </div>
      <div class="mine">
        <div class="sq-icon">
          <i class="fa fa-user-circle"></i>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
  export default {
    name: 'app-header',
    props: ['changeIsNavShow']
  }
</script>
<style lang="scss">
  .app-header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: #282828;
    color: #fff;
    .header-left{
      display: flex;
      height: 50px;
      line-height: 50px;
    }
    .header-right{
      display: flex;
      align-items: center;
      .locations{
        color: #999;
      }
    }
  }
  .sq-icon{
    width: 0.5rem;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
</style>
