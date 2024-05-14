<template>
  <b-container id="contact" class="my-5">
    <h2>Contact Me</h2>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Name" label-for="name">
        <b-form-input id="name" v-model="form.name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Message" label-for="message">
        <b-form-textarea id="message" v-model="form.message" rows="5" required></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Send</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission logic here
      console.log(this.form);
      // Reset form fields
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>