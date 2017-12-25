<template>
  <div class="app-main-showing">
    <showing-movie></showing-movie>
  </div>
</template> 

<script>
  import ShowingMovie from './showingMovie'
  export default {
    name: 'app-main-showing',
    data () {
      return {
        showingMoves: []
      }
    },
    components: {
      ShowingMovie
    }
  }
</script>
<style >

</style>
