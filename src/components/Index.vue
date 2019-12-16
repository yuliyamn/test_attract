<template>
  <div class="container">
    <filters></filters>
    <preview></preview>
  </div>
</template>

<script>
  import preview from './preview/preview';
  import filters from './filters/filters';
  export default {
    name: "index",
    components: {
      filters,
      preview
    }
  }
</script>

<style scoped>

</style>
