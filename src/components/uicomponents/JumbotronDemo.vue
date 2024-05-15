<template>
  <div>
    <b-container>
      <b-row class="mb-4">
        <b-col>
          <b-jumbotron header="Bienvenidos a esta demostracion" lead="Componentes Bootstrap v4 para Vue.js 2">
            <p>Para más información, revisa la documentación.</p>
            <b-button variant="primary" href="https://bootstrap-vue.org/">https://bootstrap-vue.org/</b-button>
          </b-jumbotron>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
            <template #header>Características de BootstrapVue</template>
            <template #lead>
              Este es un componente de jumbotron simple para llamar la atención sobre contenido destacado.
            </template>
            <hr class="my-4">
            <p>
              Utiliza clases de utilidad para tipografía y espaciado para espaciar el contenido dentro del contenedor más grande.
            </p>
            <b-button variant="primary" href="#">Haz Algo</b-button>
            <b-button variant="success" href="#">Haz Algo Más</b-button>
          </b-jumbotron>
        </b-col>
        <b-col md="6">
          <b-jumbotron fluid bg-variant="dark" text-variant="light">
            <template #header>Modo Fluido</template>
            <template #lead>
              Este jumbotron ocupa todo el ancho y no tiene esquinas redondeadas.
            </template>
            <hr class="my-4">
            <p>
              Perfecto para llamar la atención en toda la pantalla.
            </p>
            <b-button variant="light" href="#">Explora</b-button>
            <b-button variant="info" href="#">Aprende Más</b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'JumbotronDemo'
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
