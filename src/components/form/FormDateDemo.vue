<!-- FormDateDemo.vue -->
<template>
  <div>
    <h2>Selector de Fecha</h2>
    <div>
      <label for="example-datepicker">Selecciona una fecha</label>
      <b-form-datepicker id="example-datepicker" v-model="selectedDate" class="mb-2"></b-form-datepicker>
      <p>Fecha seleccionada: {{ selectedDate }}</p>
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
