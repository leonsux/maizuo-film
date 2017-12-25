<template>
  <div class="film-item">
    <div class="film-item-img">
      <img :src="item.poster.origin" alt="">
    </div>
    <div class="film-item-info">
      <div>
        <span>{{item.name}}</span>
        <div>
          <span>{{item.grade}}&nbsp;</span>
          <i class="fa fa-angle-right"></i>
        </div>
        
      </div>
      <div><span>{{item.intro}}</span></div>
      <div>
        <div><i>{{item.cinemaCount}}</i><span>家影院上映</span></div>
        <div><i>{{item.watchCount}}</i><span>人购票</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'film-item',
    props: ['item']
  }
</script>

<style lang="scss">
  .film-item{
    height: 0.83rem;
    padding: 20px 0;
    display: flex;
    align-items: center;
    border-bottom: dashed 1px #c9c9c9;
    .film-item-img{
      img{
        width: 0.6rem;

      }
    }
    .film-item-info{
      height: 100%;
      width: 100%;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // align-items: space-around;
      :nth-child(1){
        display: flex;
        justify-content: space-between;
        span{
          font-size: 16px;
        }
        div{
          margin-right: 20px;
          display: flex;
          align-items: center;
          span{
            color: #fc7103;
            font-size: 16px;
          }
          i{
            color: #c6c6c6;
          }
        }
      }
      :nth-child(2){
        font-size: 12px;
        color: #8e8e8e;
      }
      :nth-child(3){
        display: flex;
        font-size: 12px;
        i{
          color: #8aa2bf;
        }
        div{
          display: flex;
          color: #8e8e8e;
          span{
            font-size: 12px;
            margin-right: .3rem;
          }
        }
      }
    }
  }
</style>