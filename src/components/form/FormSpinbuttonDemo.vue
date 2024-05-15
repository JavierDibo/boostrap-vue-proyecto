<!-- FormSpinbuttonDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Valor Envolvente</h3>
        <label for="sb-wrap">Spinbutton con valor envolvente:</label>
        <b-form-spinbutton id="sb-wrap" v-model="wrapValue" min="1" max="7" wrap class="mb-3"
                           style="max-width: 200px;"></b-form-spinbutton>
        <p>Día seleccionado: {{ days[wrapValue - 1] }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Formato Personalizado</h3>
        <label for="sb-format">Spinbutton con formato personalizado:</label>
        <b-form-spinbutton id="sb-format" v-model="formatValue" :formatter-fn="formatFn" min="0" max="1" step="0.01"
                           class="mb-3" style="max-width: 200px;"></b-form-spinbutton>
        <p>Valor formateado: {{ formatFn(formatValue) }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Diseño Vertical</h3>
        <label for="sb-vertical">Spinbutton vertical:</label>
        <b-form-spinbutton id="sb-vertical" v-model="verticalValue" size="lg" vertical class="mb-3"
                           style="max-width: 200px;"></b-form-spinbutton>
        <p>Valor vertical: {{ verticalValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wrapValue: 1,
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
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
