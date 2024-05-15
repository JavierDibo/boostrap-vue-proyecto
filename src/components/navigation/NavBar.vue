<!-- NavBar.vue -->
<template>
  <b-container>
    <b-navbar toggleable="md" type="dark" class="custom-navbar" fixed="top">
    <b-navbar-brand href="#">BoostrapVue features</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="(section, index) in sections" :key="index" :to="section.route">
            {{ section.name }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { name: 'Layout', route: '/app/layout' },
        { name: 'Navigation', route: '/app/navigation' },
        { name: 'Forms', route: '/app/forms' },
        { name: 'UIComponents', route: '/app/uicomponents' },
      ],
    };
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
