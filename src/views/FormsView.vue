<!-- FormsView.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Forms Components</h1>
      <FormDemo />
      <FormCheckboxDemo />
    </div>
  </b-container>
</template>

<script>


import FormDemo from "@/components/FormDemo.vue";
import FormCheckboxDemo from "@/components/FormCheckboxDemo.vue";
export default {
  components: {
    FormCheckboxDemo,
    FormDemo,
  },
};
</script>