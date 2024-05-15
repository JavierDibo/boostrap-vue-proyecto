<!-- FormRadioDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-form-group label="Botones de Radio Grandes" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
              v-model="selectedButton"
              :options="buttonOptions"
              :aria-describedby="ariaDescribedby"
              buttons
              button-variant="outline-primary"
              size="lg"
              name="radio-btn-outline"
              stacked
          ></b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-form-group label="Radios con Estado Contextual" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
              v-model="selectedState"
              :options="stateOptions"
              :aria-describedby="ariaDescribedby"
              :state="selectedState !== null"
              name="radio-validation"
          >
            <b-form-invalid-feedback :state="selectedState !== null">Por favor, selecciona uno</b-form-invalid-feedback>
            <b-form-valid-feedback :state="selectedState !== null">Gracias</b-form-valid-feedback>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="dark" text-variant="white" class="mt-3">
          <b-card-text>
            Botón de Radio Seleccionado: <strong>{{ selectedButton }}</strong>
            <br>
            Estado de Radio Seleccionado: <strong>{{ selectedState }}</strong>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedButton: 'radio1',
      buttonOptions: [
        {text: 'Radio 1', value: 'radio1'},
        {text: 'Radio 2', value: 'radio2'},
        {text: 'Radio 3', value: 'radio3'},
      ],
      selectedState: null,
      stateOptions: [
        {text: 'Primero', value: 'primero'},
        {text: 'Segundo', value: 'segundo'},
        {text: 'Tercero', value: 'tercero'}
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
