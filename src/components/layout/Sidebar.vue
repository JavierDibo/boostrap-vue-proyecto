<!-- Sidebar.vue -->
<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="auto">
        <b-button variant="primary" v-b-toggle.sidebar-1>Activar Sidebar</b-button>
      </b-col>
    </b-row>
    <b-sidebar id="sidebar-1" title="BootstrapVue Features" shadow>
      <div class="px-3 py-2">
        <b-nav vertical class="sidebar-nav">
          <div v-for="(section, index) in sections" :key="index">
            <h6 class="sidebar-section-title">{{ section.name }}</h6>
            <b-nav-item
                v-for="(component, cIndex) in section.components"
                :key="cIndex"
                :href="component.url"
                @click="scrollToSection(component.url)"
            >
              {{ component.name }}
            </b-nav-item>
          </div>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sections: [
        {
          name: 'Layout',
          components: [
            {name: 'Sistema de Layout y Celdas', url: '#layout-grid'},
            {name: 'Sidebar', url: '#sidebar'},
          ],
        },
        {
          name: 'Navigation',
          components: [
            {name: 'Breadcrumb', url: '#breadcrumb'},
            {name: 'Dropdown', url: '#dropdown'},
            {name: 'Link', url: '#link'},
            {name: 'Nav', url: '#nav'},
            {name: 'Navbar', url: '#navbar'},
            {name: 'Pagination', url: '#pagination'},
            {name: 'Pagination Nav', url: '#pagination-nav'},
            {name: 'Tabs', url: '#tabs'},
          ],
        },
        {
          name: 'Forms',
          components: [
            {name: 'Form', url: '#form'},
            {name: 'Form Checkbox', url: '#form-checkbox'},
            {name: 'Form Datepicker', url: '#form-datepicker'},
            {name: 'Form File', url: '#form-file'},
            {name: 'Form Group', url: '#form-group'},
            {name: 'Form Input', url: '#form-input'},
            {name: 'Form Radio', url: '#form-radio'},
            {name: 'Form Rating', url: '#form-rating'},
            {name: 'Form Select', url: '#form-select'},
            {name: 'Form Spinbutton', url: '#form-spinbutton'},
            {name: 'Form Tags', url: '#form-tags'},
            {name: 'Form Textarea', url: '#form-textarea'},
            {name: 'Form Timepicker', url: '#form-timepicker'},
            {name: 'Input Group', url: '#input-group'},
          ],
        },
        {
          name: 'UI Components #1',
          components: [
            {name: 'Alert', url: '#alert'},
            {name: 'Aspect', url: '#aspect'},
            {name: 'Avatar', url: '#avatar'},
            {name: 'Badge', url: '#badge'},
            {name: 'Button', url: '#button'},
            {name: 'Button Group', url: '#button-group'},
            {name: 'Button Toolbar', url: '#button-toolbar'},
            {name: 'Calendar', url: '#calendar'},
            {name: 'Card', url: '#card'},
            {name: 'Carousel', url: '#carousel'},
            {name: 'Collapse', url: '#collapse'},
            {name: 'Embed', url: '#embed'},
            {name: 'Image', url: '#image'},
            {name: 'Jumbotron', url: '#jumbotron'},
          ],
        },
        {
          name: 'UI Components #2',
          components: [
            {name: 'List Group', url: '#list-group'},
            {name: 'Media', url: '#media'},
            {name: 'Modal', url: '#modal'},
            {name: 'Overlay', url: '#overlay'},
            {name: 'Popover', url: '#popover'},
            {name: 'Progress', url: '#progress'},
            {name: 'Skeleton', url: '#skeleton'},
            {name: 'Spinner', url: '#spinner'},
            {name: 'Table', url: '#table'},
            {name: 'Time', url: '#time'},
            {name: 'Toast', url: '#toast'},
            {name: 'Tooltip', url: '#tooltip'},
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(url) {
      const element = document.querySelector(url);
      element.scrollIntoView({behavior: 'smooth'});
      this.$root.$emit('bv::toggle::collapse', 'sidebar-1');
    },
  },
};
</script>
<style scoped>
.sidebar-nav {
  padding: 0;
}

.sidebar-section-title {
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>