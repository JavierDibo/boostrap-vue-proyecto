<!-- LayoutView.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Layout Components</h1>
      <GridLayout/>
      <h1 class="mb-4">Sidebar</h1>
      <SideBar/>
    </div>
  </b-container>
</template>

<script>
import GridLayout from "@/components/GridLayout.vue";
import SideBar from "@/components/Sidebar.vue";

export default {
  components: {
    GridLayout,
    SideBar,
  },
};
</script>