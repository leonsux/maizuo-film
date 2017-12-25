<template>
  <div>
    <film-item :item="item"></film-item>
  </div>
</template>

<script>
  import filmItem from './film_item'

  export default {
    name: 'showing-item',
    props: ['item'],
    components: {
      filmItem
    }
  }
</script>

<style>
  .film-item{
    display: flex;
  }
</style>