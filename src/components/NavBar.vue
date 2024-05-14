<template>
  <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
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
.navbar {
  transition: background-color 0.3s;
}

.navbar:hover {
  background-color: #0056b3;
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