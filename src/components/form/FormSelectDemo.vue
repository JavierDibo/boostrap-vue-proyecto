<!-- FormSelectDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Selección Simple con Búsqueda</h3>
        <b-form-select v-model="selectedOption" :options="options" class="mb-3">
          <template #first>
            <b-form-select-option :value="null" disabled>-- Por favor selecciona una opción --</b-form-select-option>
          </template>
        </b-form-select>
        <p>Seleccionado: <strong>{{ selectedOption }}</strong></p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Selección Múltiple con Grupos de Opciones</h3>
        <b-form-select v-model="selectedOptions" multiple :select-size="6" class="mb-3">
          <b-form-select-option-group label="Grupo 1">
            <b-form-select-option value="1">Opción 1</b-form-select-option>
            <b-form-select-option value="2">Opción 2</b-form-select-option>
          </b-form-select-option-group>
          <b-form-select-option-group label="Grupo 2">
            <b-form-select-option value="3">Opción 3</b-form-select-option>
            <b-form-select-option value="4">Opción 4</b-form-select-option>
          </b-form-select-option-group>
        </b-form-select>
        <p>Seleccionado: <strong>{{ selectedOptions }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      options: [
        {value: 'op1', text: 'Opción 1'},
        {value: 'op2', text: 'Opción 2'},
        {value: 'op3', text: 'Opción 3'},
      ],
      selectedOptions: [],
      selectedHtmlOption: 'A',
    };
  },
};
</script>
