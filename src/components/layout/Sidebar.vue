<!-- Sidebar.vue -->
<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="auto">
        <b-button variant="primary" v-b-toggle.sidebar-1>Activar Barra Lateral</b-button>
      </b-col>
    </b-row>
    <b-sidebar id="sidebar-1" title="Características de BootstrapVue" shadow>
      <div class="px-3 py-2">
        <b-nav vertical class="sidebar-nav">
          <div v-for="(section, index) in sections" :key="index">
            <h6 class="sidebar-section-title">{{ section.name }}</h6>
            <b-nav-item
                v-for="(component, cIndex) in section.components"
                :key="cIndex"
                :href="component.url"
                @click="scrollToSection(component.url)"
            >
              {{ component.name }}
            </b-nav-item>
          </div>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      sections: [
        {
          name: 'Diseño',
          components: [
            {name: 'Sistema de Diseño y Celdas', url: '#layout-grid'},
            {name: 'Barra Lateral', url: '#sidebar'},
          ],
        },
        {
          name: 'Navegación',
          components: [
            {name: 'Migas de Pan', url: '#breadcrumb'},
            {name: 'Desplegable', url: '#dropdown'},
            {name: 'Enlace', url: '#link'},
            {name: 'Navegación', url: '#nav'},
            {name: 'Barra de Navegación', url: '#navbar'},
            {name: 'Paginación', url: '#pagination'},
            {name: 'Paginación Nav', url: '#pagination-nav'},
            {name: 'Pestañas', url: '#tabs'},
          ],
        },
        {
          name: 'Formularios',
          components: [
            {name: 'Formulario', url: '#form'},
            {name: 'Formulario Checkbox', url: '#form-checkbox'},
            {name: 'Formulario Datepicker', url: '#form-datepicker'},
            {name: 'Formulario Archivo', url: '#form-file'},
            {name: 'Formulario Grupo', url: '#form-group'},
            {name: 'Formulario Entrada', url: '#form-input'},
            {name: 'Formulario Radio', url: '#form-radio'},
            {name: 'Formulario Calificación', url: '#form-rating'},
            {name: 'Formulario Selección', url: '#form-select'},
            {name: 'Formulario Spinbutton', url: '#form-spinbutton'},
            {name: 'Formulario Etiquetas', url: '#form-tags'},
            {name: 'Formulario Área de Texto', url: '#form-textarea'},
            {name: 'Formulario Selector de Hora', url: '#form-timepicker'},
            {name: 'Grupo de Entrada', url: '#input-group'},
          ],
        },
        {
          name: 'Componentes UI #1',
          components: [
            {name: 'Alerta', url: '#alert'},
            {name: 'Aspecto', url: '#aspect'},
            {name: 'Avatar', url: '#avatar'},
            {name: 'Insignia', url: '#badge'},
            {name: 'Botón', url: '#button'},
            {name: 'Grupo de Botones', url: '#button-group'},
            {name: 'Barra de Herramientas de Botones', url: '#button-toolbar'},
            {name: 'Calendario', url: '#calendar'},
            {name: 'Tarjeta', url: '#card'},
            {name: 'Carrusel', url: '#carousel'},
            {name: 'Colapso', url: '#collapse'},
            {name: 'Incrustar', url: '#embed'},
            {name: 'Imagen', url: '#image'},
            {name: 'Jumbotron', url: '#jumbotron'},
          ],
        },
        {
          name: 'Componentes UI #2',
          components: [
            {name: 'Grupo de Lista', url: '#list-group'},
            {name: 'Medios', url: '#media'},
            {name: 'Modal', url: '#modal'},
            {name: 'Superposición', url: '#overlay'},
            {name: 'Popover', url: '#popover'},
            {name: 'Progreso', url: '#progress'},
            {name: 'Esqueleto', url: '#skeleton'},
            {name: 'Spinner', url: '#spinner'},
            {name: 'Tabla', url: '#table'},
            {name: 'Hora', url: '#time'},
            {name: 'Tostada', url: '#toast'},
            {name: 'Tooltip', url: '#tooltip'},
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(url) {
      const element = document.querySelector(url);
      element.scrollIntoView({behavior: 'smooth'});
      this.$root.$emit('bv::toggle::collapse', 'sidebar-1');
    },
  },
};
</script>

<style scoped>
.sidebar-nav {
  padding: 0;
}

.sidebar-section-title {
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
