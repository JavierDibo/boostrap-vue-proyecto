<!-- HomeView.vue -->
<template>
  <b-container class="mt-5">
    <b-jumbotron header="Bienvenid@ a BootstrapVue!" lead="Exposición sobre las funcionalidades de BootstrapVue">
    </b-jumbotron>

    <b-row class="text-center mb-4">
      <b-col md="6" lg="4" class="mb-4">
        <b-card
            class="hover-card"
            title="Componentes UI"
            img-alt="Componentes UI"
            img-top
        >
          <b-card-text>
            Descubre una amplia variedad de componentes UI que puedes usar para construir interfaces de usuario ricas e interactivas.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" :to="{ path: '/app/uicomponents' }">Ver más</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" class="mb-4">
        <b-card
            class="hover-card"
            title="Formularios"
            img-alt="Formularios"
            img-top
        >
          <b-card-text>
            Aprende a crear formularios dinámicos y accesibles usando los componentes de formulario de BootstrapVue.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" :to="{ path: '/app/forms' }">Ver más</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" class="mb-4">
        <b-card
            class="hover-card"
            title="Navegación"
            img-alt="Navegación"
            img-top
        >
          <b-card-text>
            Implementa barras de navegación, menús y otras herramientas de navegación fácilmente con BootstrapVue.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" :to="{ path: '/app/navigation' }">Ver más</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" class="mb-4">
        <b-card
            class="hover-card"
            title="Diseño"
            img-alt="Diseño"
            img-top
        >
          <b-card-text>
            Explora diversas técnicas y componentes para crear un diseño atractivo y funcional con BootstrapVue.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" :to="{ path: '/app/layout' }">Ver más</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col md="6" lg="4" class="mb-4">
        <b-card
            class="hover-card"
            title="Directivas"
            img-alt="Directivas"
            img-top
        >
          <b-card-text>
            Aprovecha las poderosas directivas de BootstrapVue para agregar comportamiento y estilo a tus componentes.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" :to="{ path: '/app/directives' }">Ver más</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>

    <!-- Nueva sección para el botón de documentación -->
    <b-row class="text-center">
      <b-col>
        <b-card class="hover-card mb-4">
          <b-card-text>
            ¿Quieres saber más sobre BootstrapVue? Visita la documentación oficial para obtener más información y ejemplos detallados.
          </b-card-text>
          <b-card-footer class="text-center">
            <b-button variant="primary" href="https://bootstrap-vue.org/" target="_blank">Documentación</b-button>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.mt-5 {
  margin-top: 3rem;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
.hover-card {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.hover-card:hover {
  transform: scale(1.05);
  background-color: #f2f6ff;
}
</style>
