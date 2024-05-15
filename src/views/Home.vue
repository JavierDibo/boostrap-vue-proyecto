<template>
  <div>
    <section id="layout" class="content-section">
      <h2>Layout</h2>
      <GridLayout />
    </section>
    <section id="navigation" class="content-section">
      <!-- Add Navigation section content here -->
    </section>
    <section id="forms" class="content-section">
      <!-- Add Forms section content here -->
    </section>
    <section id="ui-components-1" class="content-section">
      <!-- Add UI Components #1 section content here -->
    </section>
    <section id="ui-components-2" class="content-section">
      <!-- Add UI Components #2 section content here -->
    </section>
  </div>
</template>

<script>
import GridLayout from "@/components/GridLayout.vue";

export default {
  components: {
    GridLayout,
  },
};
</script>

<style scoped>
.content-section {
  padding-top: 72px;
  margin-bottom: 40px;
}
</style>