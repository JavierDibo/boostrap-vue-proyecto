<template>
  <div class="container">
    <h2 class="my-4">Barra de Progreso</h2>

    <div class="row mb-4">
      <div class="col-md-8 offset-md-2">
        <h3>Barra de Progreso Animada con Rayas</h3>
        <b-progress :value="animatedValue" :max="max" striped animated variant="info" class="mb-4"></b-progress>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-8 offset-md-2">
        <h3>Barras de Progreso Apiladas</h3>
        <b-progress :max="max" height="30px" class="mb-4">
          <b-progress-bar variant="success" :value="values[0]">
            <strong>Éxito</strong>
          </b-progress-bar>
          <b-progress-bar variant="warning" :value="values[1]">
            <strong>Advertencia</strong>
          </b-progress-bar>
          <b-progress-bar variant="danger" :value="values[2]">
            <strong>Peligro</strong>
          </b-progress-bar>
        </b-progress>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-8 offset-md-2">
        <h3>Barra de Progreso con Etiquetas Personalizadas (Estática)</h3>
        <b-progress :max="max" height="30px" class="mb-4">
          <b-progress-bar variant="primary" :value="75" :label="`${((75 / max) * 100).toFixed(1)}%`"></b-progress-bar>
          <b-progress-bar variant="secondary" :value="25" :label-html="`<strong>${25}/${max}</strong>`"></b-progress-bar>
        </b-progress>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-8 offset-md-2">
        <h3>Barras de Progreso Delgadas con Precisión</h3>
        <b-progress height="2px" :value="preciseDemoValue" :max="max" :precision="2" variant="success"
                    class="mb-2"></b-progress>
        <b-progress height="2px" :value="preciseDemoValue*0.8" :max="max" :precision="2" variant="warning"
                    class="mb-2"></b-progress>
        <b-progress height="2px" :value="preciseDemoValue*0.6" :max="max" :precision="2" variant="danger"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedValue: 75,
      preciseDemoValue: 25.556,
      values: [40, 35, 25],
      max: 100
    }
  },
  mounted() {
    setInterval(() => {
      this.animatedValue = 25 + Math.random() * 75;
      this.preciseDemoValue = Math.random() * this.max;
      this.values = this.values.map(() => Math.random() * 50);
    }, 1400);
  }
}
</script>
