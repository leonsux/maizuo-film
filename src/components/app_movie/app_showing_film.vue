<template>
  <div>
    <ul>
      <li v-for="item in films">
        <showing-item :item="item"></showing-item>
      </li>
      
    </ul>
    
  </div>
</template>

<script>
  import axios from 'axios'
  import ShowingItem from './showing_item'
  export default {
    name: 'app-showing-film',
    data () {
      return {
        films: []
      }
    },
    components: {
      ShowingItem
    },
    methods: {
      getData () {
        axios.get('http://localhost:8080/mz/v4/api/film/now-playing', {
          params: {__t: Date.now(), page: 1, count: 7}
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

<style></style>