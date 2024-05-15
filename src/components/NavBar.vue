<!-- NavBar.vue -->
<template>
  <b-navbar toggleable="md" type="dark" class="custom-navbar" fixed="top">
    <b-navbar-brand href="#">BoostrapVue features</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-for="(section, index) in sections" :key="index" :text="section.name">
          <b-dropdown-item v-for="(component, cIndex) in section.components" :key="cIndex" :href="component.url" @click="scrollToSection(component.url)">
            {{ component.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse></b-navbar>
</template>
<script>
export default {
  data() {
    return {
      sections: [
        {
          name: 'Layout',
          components: [
            { name: 'Layout and Grid System', url: '#layout-grid' },
            { name: 'Sidebar', url: '#sidebar' },
          ],
        },
        {
          name: 'Navigation',
          components: [
            { name: 'Breadcrumb', url: '#breadcrumb' },
            { name: 'Dropdown', url: '#dropdown' },
            { name: 'Link', url: '#link' },
            { name: 'Nav', url: '#nav' },
            { name: 'Navbar', url: '#navbar' },
            { name: 'Pagination', url: '#pagination' },
            { name: 'Pagination Nav', url: '#pagination-nav' },
            { name: 'Tabs', url: '#tabs' },
          ],
        },
        {
          name: 'Forms',
          components: [
            { name: 'Form', url: '#form' },
            { name: 'Form Checkbox', url: '#form-checkbox' },
            { name: 'Form Datepicker', url: '#form-datepicker' },
            { name: 'Form File', url: '#form-file' },
            { name: 'Form Group', url: '#form-group' },
            { name: 'Form Input', url: '#form-input' },
            { name: 'Form Radio', url: '#form-radio' },
            { name: 'Form Rating', url: '#form-rating' },
            { name: 'Form Select', url: '#form-select' },
            { name: 'Form Spinbutton', url: '#form-spinbutton' },
            { name: 'Form Tags', url: '#form-tags' },
            { name: 'Form Textarea', url: '#form-textarea' },
            { name: 'Form Timepicker', url: '#form-timepicker' },
            { name: 'Input Group', url: '#input-group' },
          ],
        },
        {
          name: 'UI Components #1',
          components: [
            { name: 'Alert', url: '#alert' },
            { name: 'Aspect', url: '#aspect' },
            { name: 'Avatar', url: '#avatar' },
            { name: 'Badge', url: '#badge' },
            { name: 'Button', url: '#button' },
            { name: 'Button Group', url: '#button-group' },
            { name: 'Button Toolbar', url: '#button-toolbar' },
            { name: 'Calendar', url: '#calendar' },
            { name: 'Card', url: '#card' },
            { name: 'Carousel', url: '#carousel' },
            { name: 'Collapse', url: '#collapse' },
            { name: 'Embed', url: '#embed' },
            { name: 'Image', url: '#image' },
            { name: 'Jumbotron', url: '#jumbotron' },
          ],
        },
        {
          name: 'UI Components #2',
          components: [
            { name: 'List Group', url: '#list-group' },
            { name: 'Media', url: '#media' },
            { name: 'Modal', url: '#modal' },
            { name: 'Overlay', url: '#overlay' },
            { name: 'Popover', url: '#popover' },
            { name: 'Progress', url: '#progress' },
            { name: 'Skeleton', url: '#skeleton' },
            { name: 'Spinner', url: '#spinner' },
            { name: 'Table', url: '#table' },
            { name: 'Time', url: '#time' },
            { name: 'Toast', url: '#toast' },
            { name: 'Tooltip', url: '#tooltip' },
          ],
        },
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
