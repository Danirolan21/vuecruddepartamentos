<template>
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  padding: 15px 0;
  color: azure;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #111111;
  background-image: linear-gradient(
    32deg,
    rgba(8, 8, 8, 0.74) 30px,
    transparent
  );
  background-size: 60px 60px;
  background-position: -5px -5px;
}
</style>
