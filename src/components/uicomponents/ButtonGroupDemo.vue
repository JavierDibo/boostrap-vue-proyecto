<template>
  <div>
    <h2>Grupos de Botones</h2>

    <h3>Grupo de Botones Básico</h3>
    <b-button-group>
      <b-button variant="primary">Izquierda</b-button>
      <b-button variant="primary">Centro</b-button>
      <b-button variant="primary">Derecha</b-button>
    </b-button-group>

    <h3 class="mt-4">Tamaño del Grupo de Botones</h3>
    <div>
      <b-button-group size="sm">
        <b-button variant="info">Pequeño</b-button>
        <b-button variant="info">Botones</b-button>
      </b-button-group>
    </div>
    <div class="my-3">
      <b-button-group>
        <b-button variant="success">Predeterminado</b-button>
        <b-button variant="success">Botones</b-button>
      </b-button-group>
    </div>
    <div>
      <b-button-group size="lg">
        <b-button variant="warning">Grande</b-button>
        <b-button variant="warning">Botones</b-button>
      </b-button-group>
    </div>

    <h3 class="mt-4">Grupo de Botones Vertical</h3>
    <b-button-group vertical>
      <b-button variant="secondary">Arriba</b-button>
      <b-button variant="secondary">Centro</b-button>
      <b-button variant="secondary">Abajo</b-button>
    </b-button-group>

    <h3 class="mt-4">Grupo de Botones con Menú Desplegable</h3>
    <b-button-group>
      <b-button variant="danger">Botón</b-button>
      <b-dropdown variant="danger" right text="Menú">
        <b-dropdown-item>Elemento 1</b-dropdown-item>
        <b-dropdown-item>Elemento 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Elemento 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown variant="danger" right split text="Menú Dividido">
        <b-dropdown-item>Elemento 1</b-dropdown-item>
        <b-dropdown-item>Elemento 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Elemento 3</b-dropdown-item>
      </b-dropdown>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroupDemo'
}
</script>
