<template>
  <div>
    <b-container>
      <!-- Fila 2: Tooltips -->
      <b-row class="text-center my-3">
        <b-col md="12">
          <h2>Tooltip</h2>
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.hover="'Tooltip en el Top!'" variant="primary">Top</b-button>
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.hover.right="'Tooltip a la Derecha!'" variant="primary">Right</b-button>
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.hover.left="'Tooltip a la Izquierda!'" variant="primary">Left</b-button>
        </b-col>
        <b-col md="3" class="py-3">
          <b-button v-b-tooltip.hover.bottom="'Tooltip en el Fondo!'" variant="primary">Bottom</b-button>
        </b-col>
      </b-row>

      <!-- Fila 3: Toggle -->
      <b-row>
        <b-col md="12" class="text-center my-3">
          <h2>Toggle</h2>
          <b-button v-b-toggle.my-collapse variant="info" class="mb-3">Mostrar/Ocultar Contenido</b-button>
          <b-collapse id="my-collapse">
            <b-card title="Contenido Colapsable">
              Este es un contenido que puede ser mostrado u ocultado mediante el uso de la directiva v-b-toggle.
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur,
        ligula a fringilla cursus, quam turpis aliquet odio, eget luctus nulla ligula non
        quam. Quisque vitae suscipit odio. Duis sit amet ligula sed urna suscipit bibendum.
        Nullam vitae nunc ac justo interdum sollicitudin.
      `
    }
  },
  methods: {
    handleVisibility(isVisible) {
      this.isVisible = isVisible;
    }
  }
}
</script>

<style scoped>
.bg-success {
  background-color: #d4edda !important;
}
.bg-danger {
  background-color: #f8d7da !important;
}
</style>
