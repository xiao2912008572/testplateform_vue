<template>
  <div id="app">
    <app-Container></app-Container>
  </div>
</template>

<script>
  import Container from './components/Container'

  export default {
    name: 'App',
    components: {
      appContainer: Container
    }
  }
</script>

<style>

</style>
