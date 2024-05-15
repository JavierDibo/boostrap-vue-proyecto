<!-- FormGroupDemo.vue -->
<template>
  <div>
    <!-- Grupo de formulario básico -->
    <b-container>
      <h2>Formulario condicional</h2>
      <b-form-group
          id="fieldset-1"
          description="Indícanos tu nombre."
          label="Ingresa tu nombre"
          label-for="input-1"
          valid-feedback="¡Gracias!"
          :invalid-feedback="invalidFeedback"
          :state="state"
      >
        <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
      </b-form-group>
    </b-container>

    <!-- Tamaño y alineación de etiquetas -->
    <b-container>
      <h2>Tamaño y alineación de etiquetas</h2>
      <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label="Pequeño" label-for="input-sm">
        <b-form-input id="input-sm" size="sm"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="2" label="Predeterminado" label-for="input-default">
        <b-form-input id="input-default"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="4" label-cols-lg="2" label-size="lg" label="Grande" label-for="input-lg">
        <b-form-input id="input-lg" size="lg"></b-form-input>
      </b-form-group>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return "Ingresa al menos 4 caracteres.";
      }
      return "Por favor, ingresa algo.";
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
