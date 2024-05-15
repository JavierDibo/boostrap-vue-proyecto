<template>
  <b-container fluid>
    <h3 class="my-4 text-center">Popovers</h3>

    <!-- Posicionamiento de Popovers -->
    <h5 class="my-3">Posicionamiento</h5>
    <b-row>
      <b-col v-for="placement in placements" :key="placement" md="4" class="py-4 text-center">
        <b-button :id="`popover-pos-${placement}`" variant="primary">{{ placement }}</b-button>
        <b-popover :target="`popover-pos-${placement}`" :placement="placement" title="Popover!" triggers="hover focus" :content="`Posicionamiento ${placement}`"></b-popover>
      </b-col>
    </b-row>

    <!-- Contenido mediante propiedades o slots -->
    <h5 class="my-3">Contenido mediante propiedades o slots</h5>
    <b-row>
      <b-col md="6" class="py-4 text-center">
        <b-button id="popover-prop" variant="primary">Usando propiedades</b-button>
        <b-popover target="popover-prop" title="Ejemplo de Propiedades" triggers="hover focus" content="Este contenido está incrustado usando propiedades."></b-popover>
      </b-col>

      <b-col md="6" class="py-4 text-center">
        <b-button id="popover-slot" variant="primary">Usando slots</b-button>
        <b-popover target="popover-slot" triggers="hover focus">
          <template #title>Contenido mediante Slots</template>
          Incrustar contenido <span class="text-danger">usando slots</span> ofrece mayor <em>control.</em>
        </b-popover>
      </b-col>
    </b-row>

    <!-- Popover con contenido interactivo -->
    <h5 class="my-3">Contenido interactivo</h5>
    <b-row>
      <b-col md="12" class="py-4 text-center">
        <b-button id="popover-interactive" variant="primary" ref="button">Contenido Interactivo</b-button>
        <b-popover target="popover-interactive" triggers="click" :show.sync="popoverShow" placement="auto" container="my-container" ref="popover" @show="onShow" @shown="onShown" @hidden="onHidden">
          <template #title>
            <b-button @click="onClose" class="close" aria-label="Cerrar">
              <span class="d-inline-block" aria-hidden="true">&times;</span>
            </b-button>
            Contenido Interactivo
          </template>
          <div>
            <b-form-group label="Nombre" label-for="popover-input-nombre" label-cols="3" :state="inputNombreState" class="mb-1" description="Introduce tu nombre" invalid-feedback="Este campo es obligatorio">
              <b-form-input ref="inputNombre" id="popover-input-nombre" v-model="inputNombre" :state="inputNombreState" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group label="Color" label-for="popover-input-color" label-cols="3" :state="inputColorState" class="mb-1" description="Elige un color" invalid-feedback="Este campo es obligatorio">
              <b-form-select id="popover-input-color" v-model="inputColor" :state="inputColorState" :options="options" size="sm"></b-form-select>
            </b-form-group>
            <b-alert show class="small">
              <strong>Valores actuales:</strong><br>
              Nombre: <strong>{{ inputNombre }}</strong><br>
              Color: <strong>{{ inputColor }}</strong>
            </b-alert>
            <b-button @click="onClose" size="sm" variant="danger">Cancelar</b-button>
            <b-button @click="onOk" size="sm" variant="primary">Aceptar</b-button>
          </div>
        </b-popover>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      placements: [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'rightbottom',
        'lefttop', 'left', 'leftbottom'
      ],
      inputNombre: '',
      inputNombreState: null,
      inputColor: '',
      inputColorState: null,
      options: [{ text: '- Elige uno -', value: '' }, 'Rojo', 'Verde', 'Azul'],
      inputNombreReturn: '',
      inputColorReturn: '',
      popoverShow: false
    }
  },
  watch: {
    inputNombre(val) {
      if (val) {
        this.inputNombreState = true
      }
    },
    inputColor(val) {
      if (val) {
        this.inputColorState = true
      }
    }
  },
  methods: {
    onClose() {
      this.popoverShow = false
    },
    onOk() {
      if (!this.inputNombre) {
        this.inputNombreState = false
      }
      if (!this.inputColor) {
        this.inputColorState = false
      }
      if (this.inputNombre && this.inputColor) {
        this.onClose()
        this.inputNombreReturn = this.inputNombre
        this.inputColorReturn = this.inputColor
      }
    },
    onShow() {
      this.inputNombre = ''
      this.inputColor = ''
      this.inputNombreState = null
      this.inputColorState = null
      this.inputNombreReturn = ''
      this.inputColorReturn = ''
    },
    onShown() {
      this.focusRef(this.$refs.inputNombre)
    },
    onHidden() {
      this.focusRef(this.$refs.button)
    },
    focusRef(ref) {
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus()
        })
      })
    }
  }
}
</script>

<style scoped>
#my-container {
  text-align: center;
}
</style>
