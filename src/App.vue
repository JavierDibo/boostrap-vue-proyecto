<!--App.vue-->
<template>
  <div id="app">
    <NavBar />
    <section id="layout-grid" class="content-section">
      <GridLayout />
    </section>
    <section id="projects" class="content-section">
      <!-- Add your Projects section content here -->
    </section>
    <section id="contact" class="content-section">
      <!-- Add your Contact section content here -->
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import GridLayout from "@/components/GridLayout.vue";

export default {
  components: {
    GridLayout,
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