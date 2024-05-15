<!-- App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view class="content-section"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navigation/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  name: 'App',
};
</script>

<style>
.content-section {
  padding-top: 72px; /* Add padding equal to the navbar height */
}
</style>