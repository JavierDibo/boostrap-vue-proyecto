<!-- FormDateDemo.vue -->
<template>
  <div>
    <h2>Form Datepicker</h2>
    <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="selectedDate" class="mb-2"></b-form-datepicker>
      <p>Selected date: {{ selectedDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: ''
    }
  }
}
</script>