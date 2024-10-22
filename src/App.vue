<template>
  <the-navbar></the-navbar>
  <main class="main-content">
    <router-view>
      
    </router-view>
  </main>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
export default {
  components: {
    TheNavbar
  },
}
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  background-color: #f8f9fa;
}
#app {
  min-height: 100%;
}
.main-content {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
