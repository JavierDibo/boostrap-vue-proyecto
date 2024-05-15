<!-- FormInputDemo.vue -->
<template>
  <div>
    <!-- Formatted Input -->
    <h3>Formatted Input</h3>
    <p>The input below will format the entered text to lowercase instantly:</p>
    <b-form-input v-model="formattedText" :formatter="formatter" placeholder="Enter your name"></b-form-input>
    <p>Value: {{ formattedText }}</p>

    <!-- Debounced Input -->
    <h3>Debounced Input</h3>
    <p>The input below will update the value after a 500ms debounce:</p>
    <b-form-input v-model="debouncedText" debounce="500" placeholder="Enter some text"></b-form-input>
    <p>Value: {{ debouncedText }}</p>

    <!-- Datalist Input -->
    <h3>Datalist Input</h3>
    <p>The input below demonstrates datalist support:</p>
    <b-form-input v-model="datalistText" list="my-list-id" placeholder="Choose an option"></b-form-input>
    <datalist id="my-list-id">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </datalist>
    <p>Value: {{ datalistText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formattedText: '',
      debouncedText: '',
      datalistText: ''
    }
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    }
  }
}
</script>