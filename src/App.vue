<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hero-section></hero-section>
    <projects-section></projects-section>
    <contact-form></contact-form>
    <footer-section></footer-section>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactForm from './components/ContactForm.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    ProjectsSection,
    ContactForm,
    FooterSection,
  },
};
</script>

<style>
/* Add any global styles here */
</style>