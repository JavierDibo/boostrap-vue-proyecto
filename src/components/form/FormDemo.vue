<!-- FormDemo.vue -->
<template>
  <b-container>
    <div>
      <h1 class="mb-4">Formularios básicos</h1>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-container class="mb-4">
          <h2>Formulario simple</h2>
          <div class="mb-4">
            <b-form-group
                id="input-group-1"
                label="Correo electrónico:"
                label-for="input-1"
                description="Nunca compartiremos tu correo electrónico con nadie más."
            >
              <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Ingresa correo electrónico"
                  required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="mb-4">
            <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
              <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Ingresa nombre"
                  required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="mb-4">
            <b-form-group id="input-group-3" label="Comida:" label-for="input-3">
              <b-form-select
                  id="input-3"
                  v-model="form.food"
                  :options="foods"
                  required
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="mb-4">
            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                  v-model="form.checked"
                  id="checkboxes-4"
                  :aria-describedby="ariaDescribedby"
              >
                <b-form-checkbox value="me">Marca esta opción</b-form-checkbox>
                <b-form-checkbox value="that">Marca esa opción</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </div>

          <b-button type="submit" variant="primary">Enviar</b-button>
          <b-button type="reset" variant="danger">Restablecer</b-button>
        </b-container>

      </b-form>

      <b-card class="mt-3" header="Resultado de los Datos del Formulario">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{text: 'Selecciona una', value: null}, 'Zanahorias', 'Frijoles', 'Tomates', 'Maíz'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Restablecer los valores del formulario
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Truco para restablecer/borrar el estado de validación del formulario del navegador
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
