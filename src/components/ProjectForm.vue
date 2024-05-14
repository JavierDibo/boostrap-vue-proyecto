<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group label="Title" label-for="title">
      <b-form-input id="title" v-model="form.title" required></b-form-input>
    </b-form-group>

    <b-form-group label="Description" label-for="description">
      <b-form-textarea id="description" v-model="form.description" rows="3" required></b-form-textarea>
    </b-form-group>

    <b-form-group label="Details" label-for="details">
      <b-form-textarea id="details" v-model="form.details" rows="5" required></b-form-textarea>
    </b-form-group>

    <b-form-group label="Image URL" label-for="image">
      <b-form-input id="image" v-model="form.image" type="url" required></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Save</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'ProjectForm',
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        details: '',
        image: '',
      },
    };
  },
  watch: {
    project: {
      handler(newValue) {
        if (newValue) {
          this.form = { ...newValue };
        } else {
          this.resetForm();
        }
      },
      immediate: true,
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', { ...this.form });
      this.resetForm();
    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        details: '',
        image: '',
      };
    },
  },
};
</script>