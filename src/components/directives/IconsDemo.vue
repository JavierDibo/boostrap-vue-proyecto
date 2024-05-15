<template>
  <div class="container">
    <h1 class="my-4">Iconos</h1>

    <!-- Sección de iconos con variantes de color -->
    <div class="row mb-4">
      <div class="col">
        <h3>Variantes de Color</h3>
        <div class="d-flex flex-wrap">
          <b-icon icon="exclamation-circle-fill" variant="success" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="warning" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="danger" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="info" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="primary" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="secondary" class="m-2" font-scale="2"></b-icon>
          <b-icon icon="exclamation-circle-fill" variant="dark" class="m-2" font-scale="2"></b-icon>
        </div>
      </div>
    </div>

    <!-- Sección de iconos con tamaños variados -->
    <div class="row mb-4">
      <div class="col">
        <h3>Tamaños Variados</h3>
        <div class="d-flex align-items-center">
          <p class="h1 mb-0">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
          <p class="h2 mb-0 ml-4">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
          <p class="h3 mb-0 ml-4">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
          <p class="h4 mb-0 ml-4">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
          <p class="h5 mb-0 ml-4">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
        </div>
      </div>
    </div>

    <!-- Sección de iconos con transformaciones -->
    <div class="row mb-4">
      <div class="col">
        <h3>Transformaciones</h3>
        <div class="d-flex flex-wrap">
          <b-icon icon="camera" rotate="45" font-scale="2" class="m-2"></b-icon>
          <b-icon icon="camera" rotate="90" font-scale="2" class="m-2"></b-icon>
          <b-icon icon="camera" rotate="180" font-scale="2" class="m-2"></b-icon>
          <b-icon icon="camera" rotate="270" font-scale="2" class="m-2"></b-icon>
          <b-icon icon="camera" flip-h font-scale="2" class="m-2"></b-icon>
          <b-icon icon="camera" flip-v font-scale="2" class="m-2"></b-icon>
        </div>
      </div>
    </div>

    <!-- Sección de iconos con estilos adicionales -->
    <div class="row mb-4">
      <div class="col">
        <h3>Estilos Adicionales</h3>
        <div class="d-flex flex-wrap">
          <b-icon icon="bell-fill" class="border rounded p-2 m-2" style="font-size: 3rem;"></b-icon>
          <b-icon icon="bell-fill" class="border border-info rounded p-2 m-2" variant="info" style="font-size: 3rem;"></b-icon>
          <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2 m-2" variant="light" style="font-size: 3rem;"></b-icon>
          <b-icon icon="unlock-fill" class="rounded bg-primary p-1 m-2" variant="light" style="font-size: 3rem;"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
  }
}
</script>

<style>
.container {
  max-width: 900px;
}
</style>
