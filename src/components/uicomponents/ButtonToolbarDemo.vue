<!-- ButtonToolbarDemo.vue -->
<template>
  <div>
    <h2>Barras de Herramientas con Botones</h2>

    <h3>Barra de Herramientas con Grupos de Botones y Navegación por Teclado</h3>
    <b-button-toolbar key-nav aria-label="Barra de herramientas con grupos de botones">
      <b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>Editar</b-button>
        <b-button>Deshacer</b-button>
        <b-button>Rehacer</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>&rsaquo;</b-button>
        <b-button>&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>

    <h3 class="mt-4">Barra de Herramientas con Grupos de Botones y Grupos de Entrada</h3>
    <b-button-toolbar aria-label="Barra de herramientas con grupos de botones y grupos de entrada">
      <b-button-group size="sm" class="mr-1">
        <b-button>Guardar</b-button>
        <b-button>Cancelar</b-button>
      </b-button-group>
      <b-input-group size="sm" prepend="$" append=".00">
        <b-form-input value="100" class="text-right"></b-form-input>
      </b-input-group>
    </b-button-toolbar>

    <h3 class="mt-4">Barra de Herramientas con Grupos de Botones y Menú Desplegable</h3>
    <b-button-toolbar aria-label="Barra de herramientas con grupos de botones y menú desplegable">
      <b-button-group class="mx-1">
        <b-button>Nuevo</b-button>
        <b-button>Editar</b-button>
        <b-button>Deshacer</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="Menú">
        <b-dropdown-item>Elemento 1</b-dropdown-item>
        <b-dropdown-item>Elemento 2</b-dropdown-item>
        <b-dropdown-item>Elemento 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
        <b-button>Guardar</b-button>
        <b-button>Cancelar</b-button>
      </b-button-group>
    </b-button-toolbar>

    <h3 class="mt-4">Barra de Herramientas Justificada</h3>
    <b-button-toolbar justify aria-label="Barra de herramientas justificada">
      <b-button-group class="mx-1">
        <b-button>Opción 1</b-button>
        <b-button>Opción 2</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>Opción 3</b-button>
        <b-button>Opción 4</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="Más Opciones">
        <b-dropdown-item>Opción 5</b-dropdown-item>
        <b-dropdown-item>Opción 6</b-dropdown-item>
      </b-dropdown>
    </b-button-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ButtonToolbarDemo',
};
</script>
