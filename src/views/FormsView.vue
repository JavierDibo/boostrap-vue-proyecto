<!-- FormsView.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Forms Components</h1>
      <FormDemo />
    </div>
  </b-container>
</template>

<script>


import FormDemo from "@/components/FormDemo.vue";
export default {
  components: {
    FormDemo,
  },
};
</script>