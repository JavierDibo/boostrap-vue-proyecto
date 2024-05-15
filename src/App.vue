<!--App.vue-->
<!--App.vue-->
<template>
  <div id="app">
    <NavBar/>
    <section id="layout-grid" class="content-section">
      <b-container>
        <GridLayout/>
      </b-container>
    </section>
    <section id="sidebar" class="content-section">
      <b-container>
        <SideBar/>
      </b-container>
    </section>
    <section id="breadcrumb" class="content-section">
      <b-container>
        <BreadcrumbDemo />
      </b-container>
    </section>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import GridLayout from "@/components/GridLayout.vue";
import SideBar from "@/components/Sidebar.vue";
import BreadcrumbDemo from "@/components/BreadcrumbDemo.vue";

export default {
  components: {
    BreadcrumbDemo,
    SideBar,
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