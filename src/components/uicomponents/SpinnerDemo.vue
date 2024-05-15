<template>
  <b-container>
    <!-- Título de la demostración -->
    <b-row>
      <b-col>
        <h1 class="text-center my-4">Spinners</h1>
      </b-col>
    </b-row>

    <!-- Tipos de Spinners -->
    <b-row>
      <b-col>
        <h2>Tipos de Spinners</h2>
        <div class="text-center mb-3">
          <b-spinner ></b-spinner>
          <b-spinner type="grow" ></b-spinner>
        </div>
      </b-col>
    </b-row>

    <!-- Variantes de color -->
    <b-row>
      <b-col>
        <h2>Variantes de Color</h2>
        <div class="text-center mb-3 d-flex justify-content-around">
          <b-spinner v-for="variant in variants" :variant="variant" :key="variant" ></b-spinner>
        </div>
        <div class="text-center d-flex justify-content-around">
          <b-spinner v-for="variant in variants" :variant="variant" :key="variant" type="grow" ></b-spinner>
        </div>
      </b-col>
    </b-row>

    <!-- Tamaños -->
    <b-row>
      <b-col>
        <h2>Tamaños</h2>
        <div class="text-center mb-3">
          <b-spinner small></b-spinner>
          <b-spinner style="width: 3rem; height: 3rem;"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner style="width: 3rem; height: 3rem;" type="grow"></b-spinner>
        </div>
      </b-col>
    </b-row>

    <!-- Alineación -->
    <b-row>
      <b-col>
        <h2>Alineación</h2>
        <div class="d-flex justify-content-center mb-3">
          <b-spinner ></b-spinner>
        </div>
        <div class="d-flex align-items-center">
          <strong></strong>
          <b-spinner class="ml-auto" ></b-spinner>
        </div>
        <div class="clearfix">
          <b-spinner class="float-right" ></b-spinner>
        </div>
      </b-col>
    </b-row>

    <!-- Spinners en botones -->
    <b-row>
      <b-col>
        <h2>Spinners en Botones</h2>
        <div>
          <b-button variant="primary" disabled>
            <b-spinner small></b-spinner>
            <span class="sr-only"></span>
          </b-button>

          <b-button variant="primary" disabled>
            <b-spinner small type="grow"></b-spinner>

          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
    }
  }
}
</script>

<style scoped>
h1 {
  color: #007bff;
}

h2 {
  color: #17a2b8;
  margin-top: 2rem;
}
</style>
