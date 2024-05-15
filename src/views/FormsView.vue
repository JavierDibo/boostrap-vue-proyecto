<!-- FormsView.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Forms Components</h1>
      <FormDemo />
      <FormCheckboxDemo />
      <FormDateDemo />
    </div>
  </b-container>
</template>

<script>


import FormDemo from "@/components/FormDemo.vue";
import FormCheckboxDemo from "@/components/FormCheckboxDemo.vue";
import FormDateDemo from "@/components/FormDateDemo.vue";
export default {
  components: {
    FormDateDemo,
    FormCheckboxDemo,
    FormDemo,
  },
};
</script>