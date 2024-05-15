<!-- LayoutView.vue -->
<template>
  <b-container class="my-5">
    <b-row class="justify-content-center">
      <b-col cols="12" md="10">
        <h1 class="text-center mb-5">Layout Components</h1>
        <GridLayout />
      </b-col>
    </b-row><b-row class="justify-content-center mt-5">
    <b-col cols="12" md="10">
      <h1 class="text-center mb-5">Sidebar</h1>
      <SideBar />
    </b-col>
  </b-row></b-container>
</template>
<script>
import GridLayout from "@/components/layout/GridLayout.vue";
import SideBar from "@/components/layout/Sidebar.vue";

export default {
  components: {
    GridLayout,
    SideBar,
  },
};
</script>