<template>
  <b-navbar toggleable="md" type="dark" class="custom-navbar" fixed="top">
    <b-navbar-brand href="#">My Portfolio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="(section, index) in sections" :key="index" :href="section.url" @click="scrollToSection(section.url)">
          {{ section.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' },
      ],
    };
  },
  methods: {
    scrollToSection(url) {
      const element = document.querySelector(url);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>

.custom-navbar {
  background: linear-gradient(to right, #2a166b, #6200ff);
  padding: 1rem;
  height: 72px; /* Set a fixed height for the navbar */
}

.navbar-brand,
.nav-link {
  color: #fff;
  font-weight: bold;
  margin-right: 1rem;
}

.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link:hover::before {
  transform: scaleX(1);
}
</style>