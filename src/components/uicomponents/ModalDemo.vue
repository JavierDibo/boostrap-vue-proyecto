<template>
  <div>
    <b-container>
      <b-row class="my-3">
        <b-col>
          <b-button v-b-modal.modal-demo variant="primary">Abrir Modal</b-button>
        </b-col>
      </b-row>

      <!-- Modal básico -->
      <b-modal id="modal-demo" title="Demostración de Modal">
        <p class="my-4">Este es un modal básico de BootstrapVue.</p>
        <b-button variant="primary" block @click="$bvModal.show('modal-avanzado')">Mostrar Modal Avanzado</b-button>
      </b-modal>

      <!-- Modal con variantes -->
      <b-modal id="modal-avanzado" title="Modal Avanzado" size="lg" centered>
        <p class="my-4">Este es un modal con más opciones avanzadas y contenido dinámico.</p>
        <b-container fluid>
          <b-row class="mb-2">
            <b-col cols="6">
              <b-button v-b-modal.modal-form variant="success" block>Mostrar Modal de Formulario</b-button>
            </b-col>
            <b-col cols="6">
              <b-button v-b-modal.modal-tall variant="warning" block>Contenido Largo</b-button>
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="6">
              <b-button v-b-modal.modal-custom-footer variant="info" block>Footer Personalizado</b-button>
            </b-col>
            <b-col cols="6">
              <b-button v-b-modal.modal-confirm variant="danger" block>Confirmación</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>

      <!-- Modal con formulario -->
      <b-modal id="modal-form" title="Formulario en Modal" @ok="handleSubmit">
        <b-form @submit.stop.prevent="handleSubmit">
          <b-form-group label="Nombre" label-for="input-nombre">
            <b-form-input id="input-nombre" v-model="formData.nombre" required></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="input-email">
            <b-form-input id="input-email" type="email" v-model="formData.email" required></b-form-input>
          </b-form-group>
        </b-form>
      </b-modal>

      <!-- Modal con contenido largo -->
      <b-modal id="modal-tall" title="Contenido Largo" scrollable>
        <p class="my-4" v-for="i in 20" :key="i">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
      </b-modal>

      <!-- Modal con footer personalizado -->
      <b-modal id="modal-custom-footer" title="Footer Personalizado">
        <template #modal-footer>
          <div class="w-100">
            <p class="float-left">Contenido del footer personalizado</p>
            <b-button variant="primary" size="sm" class="float-right" @click="$bvModal.hide('modal-custom-footer')">Cerrar</b-button>
          </div>
        </template>
      </b-modal>

      <!-- Modal de confirmación -->
      <b-modal id="modal-confirm" title="Confirmación" @ok="confirmAction">
        <p>¿Estás seguro de que quieres realizar esta acción?</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: '',
        email: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario
      alert(`Nombre: ${this.formData.nombre}\nEmail: ${this.formData.email}`);
      this.$bvModal.hide('modal-form');
    },
    confirmAction() {
      // Acción de confirmación
      alert('Acción confirmada');
    }
  }
}
</script>

<style scoped>
.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
