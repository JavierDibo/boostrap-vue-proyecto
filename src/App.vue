<template>
  <div id="app">
    <NavBar />
    <AnimatedHero id="home" />
    <ParallaxSection imageSrc="./about.jpg" id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </ParallaxSection>
    <ParallaxSection imageSrc="./projects.jpg" id="projects">
      <h2>Projects</h2>
      <p>Explore my latest projects and creations.</p>
    </ParallaxSection>
    <ParallaxSection imageSrc="./contact.jpg" id="contact">
      <h2>Contact Me</h2>
      <p>Get in touch with me for collaborations or inquiries.</p>
    </ParallaxSection>
  </div>
</template>

<script>
import AnimatedHero from "@/components/AnimatedHero.vue";
import NavBar from "@/components/NavBar.vue";
import ParallaxSection from "@/components/ParallaxSection.vue";

export default {
  components: {
    AnimatedHero,
    NavBar,
    ParallaxSection,
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