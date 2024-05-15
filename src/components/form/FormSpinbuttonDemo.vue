<!-- FormSpinbuttonDemo.vue -->
<template>
  <div>
    <h2>BootstrapVue Spinbutton Demo</h2>

    <h3>Wrapping Value</h3>
    <label for="sb-wrap">Spinbutton with wrapping value:</label>
    <b-form-spinbutton id="sb-wrap" v-model="wrapValue" min="1" max="7" wrap></b-form-spinbutton>
    <p>Selected day: {{ days[wrapValue - 1] }}</p>

    <h3>Custom Formatting</h3>
    <label for="sb-format">Spinbutton with custom formatting:</label>
    <b-form-spinbutton id="sb-format" v-model="formatValue" :formatter-fn="formatFn" min="0" max="1" step="0.01"></b-form-spinbutton>
    <p>Formatted value: {{ formatFn(formatValue) }}</p>

    <h3>Vertical Layout</h3>
    <label for="sb-vertical">Vertical spinbutton:</label>
    <b-form-spinbutton id="sb-vertical" v-model="verticalValue" size="lg" vertical></b-form-spinbutton>
    <p>Vertical value: {{ verticalValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrapValue: 1,
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      formatValue: 0,
      verticalValue: 50
    }
  },
  methods: {
    formatFn(value) {
      return `${(value * 100).toFixed(0)}%`
    }
  }
}
</script>