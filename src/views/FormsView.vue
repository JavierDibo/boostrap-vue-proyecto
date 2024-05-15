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
      <FormInputDemo />
      <FormRadioDemo />
    </div>
  </b-container>
</template>

<script>


import FormDemo from "@/components/form/FormDemo.vue";
import FormCheckboxDemo from "@/components/form/FormCheckboxDemo.vue";
import FormDateDemo from "@/components/form/FormDateDemo.vue";
import FormFileDemo from "@/components/form/FormFileDemo.vue";
import FormGroupDemo from "@/components/form/FormGroupDemo.vue";
import FormInputDemo from "@/components/form/FormInputDemo.vue";
import FormRadioDemo from "@/components/form/FormRadioDemo.vue";
export default {
  components: {
    FormRadioDemo,
    FormGroupDemo,
    FormFileDemo,
    FormDateDemo,
    FormCheckboxDemo,
    FormInputDemo,
    FormDemo,
  },
};
</script>