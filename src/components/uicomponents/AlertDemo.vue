<template>
  <div>
    <h2>Alertas</h2>

    <!-- Alerta Descartable con Temporizador de Descartado -->
    <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="warning"
        @dismiss-count-down="countDownChanged"
    >
      <p>Esta alerta se descartará en {{ dismissCountDown }} segundos...</p>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>

    <!-- Alerta con Contenido Adicional -->
    <b-alert show variant="success" class="mt-4">
      <h4 class="alert-heading">¡Hola!</h4>
      <p>
        Texto principal
      </p>
      <hr>
      <p class="mb-0">
        Texto adicional
      </p>
    </b-alert>

    <!-- Botones de Control -->
    <div class="mt-4">
      <b-button @click="showAlert" variant="info" class="mr-2">
        Mostrar alerta con temporizador
      </b-button>
    </div>

    <!-- Variantes Contextuales -->
    <div class="mt-4">
      <b-alert show variant="primary"><a href="#" class="alert-link">Alerta Primaria</a></b-alert>
      <b-alert show variant="secondary"><a href="#" class="alert-link">Alerta Secundaria</a></b-alert>
      <b-alert show variant="success"><a href="#" class="alert-link">Alerta de Éxito</a></b-alert>
      <b-alert show variant="danger"><a href="#" class="alert-link">Alerta de Peligro</a></b-alert>
      <b-alert show variant="warning"><a href="#" class="alert-link">Alerta de Advertencia</a></b-alert>
      <b-alert show variant="info"><a href="#" class="alert-link">Alerta de Información</a></b-alert>
      <b-alert show variant="light"><a href="#" class="alert-link">Alerta Ligera</a></b-alert>
      <b-alert show variant="dark"><a href="#" class="alert-link">Alerta Oscura</a></b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
