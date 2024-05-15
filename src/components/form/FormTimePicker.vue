<!-- FormTimePicker.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4 mt-4">
      <div class="col-md-8 text-center">
        <h3>Selector de Hora</h3>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="mb-3 p-3 border">
          <b-row>
            <b-col md="6" class="mb-2">
              <label for="timepicker-basic">Selector de Hora Básico</label>
              <b-form-timepicker id="timepicker-basic" v-model="value" locale="es"></b-form-timepicker>
              <p class="mt-2">Hora Seleccionada: <strong>'{{ value }}'</strong></p>
            </b-col>
            <b-col md="6">
              <label for="timepicker-seconds">Selector de Hora con Segundos</label>
              <b-form-timepicker id="timepicker-seconds" v-model="value" show-seconds locale="es"></b-form-timepicker>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="mb-3 p-3 border">
          <label for="timepicker-sm" class="mr-3">Pequeño:</label>
          <b-form-timepicker id="timepicker-sm" v-model="value" size="sm" locale="es"></b-form-timepicker>

          <label for="timepicker-lg" class="mx-3">Grande:</label>
          <b-form-timepicker id="timepicker-lg" v-model="value" size="lg" locale="es"></b-form-timepicker>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="p-3 border">
          <label for="timepicker-buttons">Selector de Hora con botones opcionales en el pie</label>
          <b-form-timepicker
              id="timepicker-buttons"
              v-model="value"
              now-button
              reset-button
              locale="es"
          ></b-form-timepicker>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
