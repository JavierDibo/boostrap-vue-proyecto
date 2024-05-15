<template>
  <div>
    <h3>BootstrapVue Timepicker Demo</h3>

    <b-card class="mb-3">
      <b-row>
        <b-col md="6" class="mb-2">
          <label for="timepicker-basic">Basic Timepicker</label>
          <b-form-timepicker id="timepicker-basic" v-model="value" locale="en"></b-form-timepicker>
          <p class="mt-2">Selected Time: <strong>'{{ value }}'</strong></p>
        </b-col>
        <b-col md="6">
          <label for="timepicker-seconds">Timepicker with Seconds</label>
          <b-form-timepicker id="timepicker-seconds" v-model="value" show-seconds locale="en"></b-form-timepicker>
        </b-col>
      </b-row>
    </b-card>

    <b-card class="mb-3">
      <label for="timepicker-sm" class="mr-3">Small:</label>
      <b-form-timepicker id="timepicker-sm" v-model="value" size="sm" locale="en"></b-form-timepicker>

      <label for="timepicker-lg" class="mx-3">Large:</label>
      <b-form-timepicker id="timepicker-lg" v-model="value" size="lg" locale="en"></b-form-timepicker>
    </b-card>

    <b-card>
      <label for="timepicker-buttons">Timepicker with optional footer buttons</label>
      <b-form-timepicker
          id="timepicker-buttons"
          v-model="value"
          now-button
          reset-button
          locale="en"
      ></b-form-timepicker>
    </b-card>
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