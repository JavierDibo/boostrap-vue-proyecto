<template>
  <div class="container">
    <h2 class="my-4">Overlay</h2>

    <!-- Overlay con contenido personalizado y spinner -->
    <div class="row mb-4">
      <div class="col-md-6 offset-md-3">
        <b-card class="mb-3">
          <b-overlay :show="showOverlay1" rounded="sm" spinner-variant="primary" spinner-type="grow" spinner-small>
            <b-card-text>
              Esta tarjeta tiene una superposición personalizada con un spinner primario pequeño en crecimiento.
            </b-card-text>
            <template #overlay>
              <div class="text-center">
                <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
                <p class="mb-0">Por favor, espera...</p>
              </div>
            </template>
          </b-overlay>
          <b-button @click="showOverlay1 = !showOverlay1" variant="primary" class="mt-3">
            Alternar Superposición
          </b-button>
        </b-card>
      </div>
    </div>

    <!-- Overlay con transición personalizada y desenfoque -->
    <div class="row mb-4">
      <div class="col-md-6 offset-md-3">
        <b-card>
          <b-overlay :show="showOverlay2" blur="5px" opacity="0.8" transition="fade" rounded="lg">
            <b-card-text>
              Esta tarjeta tiene una superposición personalizada con una transición de desvanecimiento y efecto de desenfoque de fondo.
            </b-card-text>
          </b-overlay>
          <b-button @click="showOverlay2 = !showOverlay2" variant="primary" class="mt-3">
            Alternar Superposición
          </b-button>
        </b-card>
      </div>
    </div>

    <!-- Overlay con formulario y confirmación -->
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <b-form class="my-4 position-relative p-3 border rounded" @submit.prevent="handleSubmit">
          <b-form-group label="Correo electrónico:" label-for="email">
            <b-form-input id="email" v-model="email" :disabled="formBusy"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="formBusy">Enviar</b-button>

          <b-overlay :show="formBusy" no-wrap>
            <template #overlay>
              <div v-if="showConfirm" class="text-center p-4 bg-light rounded">
                <p class="mb-2"><strong>¿Estás seguro?</strong></p>
                <div>
                  <b-button size="sm" @click="confirmed" variant="success">Sí</b-button>
                  <b-button size="sm" @click="formBusy = false" variant="outline-secondary" class="ml-2">No</b-button>
                </div>
              </div>
              <div v-else class="d-flex align-items-center">
                <b-spinner class="mx-1"></b-spinner>
                <strong>Procesando...</strong>
              </div>
            </template>
          </b-overlay>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOverlay1: false,
      showOverlay2: false,
      formBusy: false,
      showConfirm: false,
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      this.formBusy = true
      this.showConfirm = true
    },
    confirmed() {
      this.showConfirm = false
      setTimeout(() => {
        this.formBusy = false
        this.email = ''
      }, 2000)
    }
  }
}
</script>
