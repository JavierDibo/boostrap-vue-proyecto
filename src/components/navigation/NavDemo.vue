<!-- NavDemo.vue -->
<template>
  <div class="mb-4">
    <h2>Navegación</h2>

    <div class="mb-3">
      <h5>Navegación Básica</h5>
      <b-nav>
        <b-nav-item active>Activo</b-nav-item>
        <b-nav-item>Enlace</b-nav-item>
        <b-nav-item>Otro Enlace</b-nav-item>
        <b-nav-item disabled>Deshabilitado</b-nav-item>
      </b-nav>
    </div>

    <div class="mb-3">
      <h5>Pestañas de Navegación</h5>
      <b-nav tabs>
        <b-nav-item active>Activo</b-nav-item>
        <b-nav-item>Enlace</b-nav-item>
        <b-nav-item>Otro Enlace</b-nav-item>
        <b-nav-item disabled>Deshabilitado</b-nav-item>
      </b-nav>
    </div>

    <div class="mb-3">
      <h5>Píldoras de Navegación</h5>
      <b-nav pills>
        <b-nav-item active>Activo</b-nav-item>
        <b-nav-item>Enlace</b-nav-item>
        <b-nav-item>Otro Enlace</b-nav-item>
        <b-nav-item disabled>Deshabilitado</b-nav-item>
      </b-nav>
    </div>

    <div>
      <h5>Navegación con Desplegable</h5>
      <b-nav pills>
        <b-nav-item active>Activo</b-nav-item>
        <b-nav-item>Enlace</b-nav-item>
        <b-nav-item-dropdown text="Desplegable" right>
          <b-dropdown-item>Uno</b-dropdown-item>
          <b-dropdown-item>Dos</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  </div>
</template>
