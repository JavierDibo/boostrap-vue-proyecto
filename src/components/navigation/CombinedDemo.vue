<!-- CombinedDemo.vue -->
<template>
  <div class="mb-4">
    <h2>Componentes Extra</h2>

    <!-- Link Section -->
    <div class="mb-4">
      <h3>Link</h3>
      <div>
        <b-link href="#layout-grid">Layout y Celdas Link</b-link>
      </div>
      <div>
        <b-link href="#layout-grid" disabled>Link desactivado</b-link>
      </div>
    </div>

    <!-- Tabs Section -->
    <div class="mb-4">
      <h3 class="mb-3">Pestañas</h3>

      <b-card no-body class="mb-4">
        <b-tabs card>
          <b-tab title="Básico" active>
            <b-card-text>Este es el contenido de la pestaña básica.</b-card-text>
          </b-tab>
          <b-tab title="Píldoras">
            <b-card-text>Esta pestaña usa el estilo de píldoras.</b-card-text>
          </b-tab>
          <b-tab title="Deshabilitado" disabled>
            <b-card-text>Esta pestaña está deshabilitada.</b-card-text>
          </b-tab>
          <b-tab title="Perezoso">
            <b-card-text>Esta pestaña se carga de forma perezosa.</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>

      <div>
        <h5>Pestañas Verticales</h5>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="Pestaña 1" active>
              <b-card-text>Contenido de la pestaña 1</b-card-text>
            </b-tab>
            <b-tab title="Pestaña 2">
              <b-card-text>Contenido de la pestaña 2</b-card-text>
            </b-tab>
            <b-tab title="Pestaña 3">
              <b-card-text>Contenido de la pestaña 3</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>

    <!-- Dropdown Section -->
    <div class="mb-4">
      <h3>Desplegable</h3>
      <b-dropdown id="dropdown-1" text="Botón Desplegable" class="m-md-2">
        <b-dropdown-item>Primera Acción</b-dropdown-item>
        <b-dropdown-item>Segunda Acción</b-dropdown-item>
        <b-dropdown-item>Tercera Acción</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Acción Activa</b-dropdown-item>
        <b-dropdown-item disabled>Acción Deshabilitada</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombinedDemo',
};
</script>
