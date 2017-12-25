<template>
  <div class="toshow-movie">
    <div class="toshow">
      <div>即将上映</div>
    </div>

    <ul class="films-list">
      <li v-for="item in films" :key="item.id">
        <div class="movie-img">
          <img class="film-img" :src="item.cover.origin" alt="" :title="item.name">
        </div>
        <div class="movie-info">
          <div class="info-left">
            <span>{{item.name}}</span>
          </div>
          <div class="info-right">
            <span>{{item.premiereAt | toDate}}</span>
          </div>
        </div>
      </li>
    </ul>

    <div class="show-more">
      更多即将上映电影
    </div>
    
  </div>
</template> 

<script>
  import axios from 'axios'
  export default {
    name: 'showing-movie',
    data () {
      return {
        films: []
      }
    },
    methods: {
      getData () {
        axios.get('http://localhost:8080/mz/v4/api/film/coming-soon', {
          params: {__t: Date.now(), page: 1, count: 3}
        }).then((result) => {
          this.films = result.data.data.films
          console.log(result.data.data.films)
        })
      }
    },
    created () {
      this.getData()
    },
    filters: {
      toDate (value) {
        var date = new Date(value)
        return '' + (date.getMonth() + 1) + '月' + date.getDate() + '日上映'
      }
    }
  }
</script>
<style lang="scss">
  .toshow-movie{
    display: flex;
    flex-direction: column;
    .toshow{
      position: relative;
      margin-bottom: 30px;
      border-bottom: 1px solid #a8a8a8;
      div{
        width: 65px;
        height: 20px;
        margin: 0 auto;
        margin-bottom: -10px;
        border-radius: 5px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
      }
    }
    .film-img{
      width: 100%;
      cursor: pointer;
    }
    .films-list{
      padding-top: 18px;
      li{
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
      }
    }
    .movie-info{
      display: flex;
      height: 35px;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.35rem 0 0.11rem;
      .info-left{
        display: flex;
        flex-direction: column;
        font-size: 12px;
        :first-child{
          color: #333;
        }
      }
      .info-right{
        color: #f5a27d;
        font-size: 12px;
      }
    }
    .show-more{
      width: 160px;
      height: 30px;
      border: 1px solid #aaa;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
      margin: 0 auto;
      color: #616161;
      font-size: 12px;
      margin-bottom: 30px;
    }
  }
</style>
