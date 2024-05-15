<template>
  <div>
    <!-- Entrada Formateada -->
    <h2>Entrada Formateada</h2>
    <p>La entrada a continuación formateará el texto ingresado a minúsculas instantáneamente:</p>
    <b-form-input v-model="formattedText" :formatter="formatter" placeholder="Ingresa tu nombre"></b-form-input>
    <p>Valor: {{ formattedText }}</p>

    <!-- Entrada con Retraso -->
    <h2>Entrada con Retraso</h2>
    <p>La entrada a continuación actualizará el valor después de un retraso de 500ms:</p>
    <b-form-input v-model="debouncedText" debounce="500" placeholder="Ingresa algún texto"></b-form-input>
    <p>Valor: {{ debouncedText }}</p>

    <!-- Entrada con Lista de Datos -->
    <h2>Entrada con Lista de Datos</h2>
    <p>La entrada a continuación demuestra el soporte de lista de datos:</p>
    <b-form-input v-model="datalistText" list="my-list-id" placeholder="Elige una opción"></b-form-input>
    <datalist id="my-list-id">
      <option>Opción 1</option>
      <option>Opción 2</option>
      <option>Opción 3</option>
    </datalist>
    <p>Valor: {{ datalistText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formattedText: '',
      debouncedText: '',
      datalistText: ''
    }
  },
  methods: {
    // Función que formatea el texto a minúsculas
    formatter(value) {
      return value.toLowerCase();
    }
  }
}
</script>
