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
      <FormRatingDemo />
      <FormSelectDemo />
      <FormSpinbuttonDemo />
      <FormTagsDemo />
      <FormTextAreaDemo />
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
import FormRatingDemo from "@/components/form/FormRatingDemo.vue";
import FormSelectDemo from "@/components/form/FormSelectDemo.vue";
import FormSpinbuttonDemo from "@/components/form/FormSpinbuttonDemo.vue";
import FormTagsDemo from "@/components/form/FormTagsDemo.vue";
import FormTextAreaDemo from "@/components/form/FormTextAreaDemo.vue";
export default {
  components: {
    FormSelectDemo,
    FormRatingDemo,
    FormRadioDemo,
    FormGroupDemo,
    FormFileDemo,
    FormDateDemo,
    FormCheckboxDemo,
    FormInputDemo,
    FormDemo,
    FormSpinbuttonDemo,
    FormTagsDemo,
    FormTextAreaDemo,
  },
};
</script>