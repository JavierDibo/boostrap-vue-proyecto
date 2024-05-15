<template>
  <b-container fluid>
    <h1 class="text-center my-4">Popovers</h1>
    <b-row class="text-center">
      <!-- Popovers con diferentes posiciones -->
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.top="'¡Contenido del Popover!'" title="Popover en la parte superior" variant="primary">Arriba</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.right="'¡Contenido del Popover!'" title="Popover a la derecha" variant="primary">Derecha</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.left="'¡Contenido del Popover!'" title="Popover a la izquierda" variant="primary">Izquierda</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottom="'¡Contenido del Popover!'" title="Popover en la parte inferior" variant="primary">Abajo</b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <!-- Popovers con diferentes posiciones alineadas -->
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.topright="'¡Contenido del Popover!'" title="Popover arriba a la derecha" variant="primary">Arriba derecha</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.topleft="'¡Contenido del Popover!'" title="Popover arriba a la izquierda" variant="primary">Arriba izquierda</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottomright="'¡Contenido del Popover!'" title="Popover abajo a la derecha" variant="primary">Abajo derecha</b-button>
      </b-col>
      <b-col md="3" class="py-3">
        <b-button v-b-popover.hover.bottomleft="'¡Contenido del Popover!'" title="Popover abajo a la izquierda" variant="primary">Abajo izquierda</b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <!-- Popovers con diferentes triggers -->
      <b-col md="4" class="py-3">
        <b-button v-b-popover="'¡Contenido del Popover!'" title="Click para activar" variant="outline-success">Click</b-button>
      </b-col>
      <b-col md="4" class="py-3">
        <b-button v-b-popover.hover="'¡Contenido del Popover!'" title="Hover para activar" variant="outline-success">Hover</b-button>
      </b-col>
      <b-col md="4" class="py-3">
        <b-button v-b-popover.focus="'¡Contenido del Popover!'" title="Focus para activar" variant="outline-success">Focus</b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <!-- Popovers con contenido y título -->
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover="{ title: 'Título del Popover', content: 'Contenido del Popover' }" variant="warning">Título y Contenido</b-button>
      </b-col>
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover.html="{ title: '<strong>Título con HTML</strong>', content: 'Contenido con <em>HTML</em>' }" variant="warning">Título y Contenido con HTML</b-button>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <!-- Popovers con diferentes variantes -->
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover.v-danger="{ content: 'Contenido del Popover' }" title="Popover Peligro">Variante de Peligro</b-button>
      </b-col>
      <b-col md="6" class="py-3">
        <b-button v-b-popover.hover="{ variant: 'info', content: 'Contenido del Popover' }" title="Popover Información">Variante de Información</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PopoverDemo'
}
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
</style>
