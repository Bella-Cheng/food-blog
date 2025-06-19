<script setup>
import NavBar from './components/NavBar.vue'
import HomePage from './views/HomePage.vue'
import About from './views/About.vue'
import Login from './components/Login.vue';
import Sign from './components/Sign.vue';
import FooterBar from './components/FooterBar.vue';


</script>

<template>
  <NavBar />
  <router-view /> 
  <FooterBar />


</template>

<style scoped>
</style>
