<template>
  <div class="app-main-toshow">
    <toshow-movie></toshow-movie>
  </div>
</template> 

<script>
  import toshowMovie from './toshowMovie'
  export default {
    name: 'app-main-toshow',
    data () {
      return {
        showingMoves: []
      }
    },
    components: {
      toshowMovie
    }
  }
</script>
<style >

</style>
