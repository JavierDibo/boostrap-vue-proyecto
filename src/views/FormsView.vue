<!-- FormsView.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Forms Components</h1>
      <FormDemo />
      <FormCheckboxDemo />
      <FormDateDemo />
      <FormFileDemo />
      <FormGroupDemo />
    </div>
  </b-container>
</template>

<script>


import FormDemo from "@/components/FormDemo.vue";
import FormCheckboxDemo from "@/components/FormCheckboxDemo.vue";
import FormDateDemo from "@/components/FormDateDemo.vue";
import FormFileDemo from "@/components/FormFileDemo.vue";
import FormGroupDemo from "@/components/FormGroupDemo.vue";
export default {
  components: {
    FormGroupDemo,
    FormFileDemo,
    FormDateDemo,
    FormCheckboxDemo,
    FormDemo,
  },
};
</script>