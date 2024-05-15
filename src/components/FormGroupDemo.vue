<!-- FormGroupDemo.vue -->
<template>
  <div>
    <!-- Basic form group -->
    <b-form-group
        id="fieldset-1"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="state"
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>

    <!-- Horizontal form group -->
    <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
    >
      <b-form-input id="input-horizontal"></b-form-input>
    </b-form-group>

    <!-- Label size and alignment -->
    <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label="Small" label-for="input-sm">
      <b-form-input id="input-sm" size="sm"></b-form-input>
    </b-form-group>

    <b-form-group label-cols="4" label-cols-lg="2" label="Default" label-for="input-default">
      <b-form-input id="input-default"></b-form-input>
    </b-form-group>

    <b-form-group label-cols="4" label-cols-lg="2" label-size="lg" label="Large" label-for="input-lg">
      <b-form-input id="input-lg" size="lg"></b-form-input>
    </b-form-group>

    <!-- Nested form group -->
    <b-card bg-variant="light">
      <b-form-group
          label-cols-lg="3"
          label="Shipping Address"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
         <!-- TODO: Add nested form group here -->
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter something.";
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>