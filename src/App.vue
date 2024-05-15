<!--App.vue-->
<template>
  <div id="app">
    <NavBar />
    <AnimatedHero id="home" />
    <section id="about">
      <!-- Add your About section content here -->
    </section>
    <section id="projects">
      <!-- Add your Projects section content here -->
    </section>
    <section id="contact">
      <!-- Add your Contact section content here -->
    </section>
  </div>
</template>

<script>
import AnimatedHero from "@/components/AnimatedHero.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    AnimatedHero,
    NavBar,
  },
  name: 'App',
};
</script>

<style>
/* Add any global styles here */
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
</style>