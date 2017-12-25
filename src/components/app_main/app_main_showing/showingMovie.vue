<template>
  <div class="showing-movie">
    <ul class="films-list">
      <li v-for="item in films" :key="item.id">
        <div class="movie-img">
          <img class="film-img" :src="item.cover.origin" alt="" :title="item.name">
        </div>
        <div class="movie-info">
          <div class="info-left">
            <span>{{item.name}}</span>
            <span>{{item.cinemaCount}}家影院上映&nbsp;{{item.watchCount}}人购票</span>
          </div>
          <div class="info-right">
            <span>{{item.grade}}</span>
          </div>
        </div>
      </li>
    </ul>

    <div class="show-more">
      更多热映电影
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
        axios.get('http://localhost:8080/mz/v4/api/film/now-playing', {
          params: {__t: Date.now(), page: 1, count: 5}
        }).then((result) => {
          this.films = result.data.data.films
          console.log(result.data.data.films)
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
<style lang="scss">
  .showing-movie{
    display: flex;
    flex-direction: column;
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
      height: 50px;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.11rem;
      .info-left{
        display: flex;
        flex-direction: column;
        font-size: 12px;

        :first-child{
          color: #333;
        }
        :last-child{
          color: #9a9a9a;
        }
      }
      .info-right{
        color: #f78360;
        font-size: 18px;
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
