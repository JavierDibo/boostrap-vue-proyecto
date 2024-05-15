<template>
  <div>
    <!-- Tarjeta Simple -->
    <b-card
        class="mb-4"
        title="Tarjeta Simple"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Imagen Aleatoria"
        img-top
        style="max-width: 20rem;"
    >
      <b-card-text>
        Un texto de ejemplo rápido para construir sobre el título de la tarjeta y formar el contenido principal de la tarjeta.
      </b-card-text>
      <b-button href="#" variant="primary">Ir a algún lugar</b-button>
    </b-card>

    <!-- Tarjeta con Subcomponentes -->
    <b-card class="text-center mb-4">
      <div class="bg-secondary text-light">
        Este es un contenido dentro del bloque predeterminado <samp>&lt;b-card-body&gt;</samp> del
        componente <samp>&lt;b-card&gt;</samp>. Nota la distancia entre el borde de la tarjeta y este
        <samp>&lt;div&gt;</samp> gris.
      </div>
    </b-card>

    <!-- Tarjeta con Cuerpo Personalizado -->
    <b-card no-body class="text-center mb-4">
      <div class="bg-secondary text-light">
        Este es un contenido sin la sección predeterminada <samp>&lt;b-card-body&gt;</samp>. Nota la
        falta de distancia entre el borde de la tarjeta y este <samp>&lt;div&gt;</samp> gris.
      </div>
    </b-card>

    <!-- Tarjeta con Títulos, Texto y Enlaces -->
    <b-card title="Tarjeta con Títulos y Enlaces" sub-title="Subtítulo de la Tarjeta" class="mb-4">
      <b-card-text>
        Un texto de ejemplo rápido para construir sobre el <em>título de la tarjeta</em> y formar el contenido principal de la tarjeta.
      </b-card-text>
      <b-card-text>Un segundo párrafo de texto en la tarjeta.</b-card-text>
      <a href="#" class="card-link">Enlace de la Tarjeta</a>
      <b-link href="#" class="card-link">Otro enlace</b-link>
    </b-card>

    <!-- Tarjeta con Imagen y Texto -->
    <b-card img-src="https://placekitten.com/1000/300" img-alt="Imagen de un Gatito" img-top class="mb-4">
      <b-card-text>
        Un texto de ejemplo rápido para construir sobre la tarjeta y formar el contenido principal de la tarjeta.
      </b-card-text>
    </b-card>

    <!-- Tarjeta con Encabezado y Pie de Página -->
    <b-card-group deck class="mb-4">
      <b-card
          header="Destacado"
          header-tag="header"
          footer="Pie de Tarjeta"
          footer-tag="footer"
          title="Tarjeta con Encabezado y Pie de Página"
      >
        <b-card-text>Encabezados y pies de página usando props.</b-card-text>
        <b-button href="#" variant="primary">Ir a algún lugar</b-button>
      </b-card>

      <b-card title="Tarjeta con Slot de Encabezado" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Slot de Encabezado</h6>
        </template>
        <b-card-text>Encabezados y pies de página usando slots.</b-card-text>
        <b-button href="#" variant="primary">Ir a algún lugar</b-button>
        <template #footer>
          <em>Slot de Pie de Página</em>
        </template>
      </b-card>
    </b-card-group>

    <!-- Diseño de Tarjeta Horizontal -->
    <b-card no-body class="overflow-hidden mb-4" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://fastly.picsum.photos/id/20/400/400.jpg?hmac=A7YmXnzxu9K5utXf6B0jErut4ApRwfhKMuPwLRWY-Wk" alt="Imagen" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Tarjeta Horizontal">
            <b-card-text>
              Esta es una tarjeta más ancha con texto de apoyo como introducción natural a contenido adicional.
              Este contenido es un poco más largo.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <!-- Tarjeta con Diferentes Variantes de Fondo y Texto -->
    <b-card bg-variant="dark" text-variant="white" title="Tarjeta Oscura" class="mb-4">
      <b-card-text>
        Con texto de apoyo a continuación como una introducción natural a contenido adicional.
      </b-card-text>
      <b-button href="#" variant="primary">Ir a algún lugar</b-button>
    </b-card>

    <!-- Ejemplo de Grupo de Tarjetas -->
    <b-card-group deck class="mb-4">
      <b-card title="Tarjeta Primaria" bg-variant="primary" text-variant="white" header="Primaria">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card title="Tarjeta Secundaria" bg-variant="secondary" text-variant="white" header="Secundaria">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card title="Tarjeta de Éxito" bg-variant="success" text-variant="white" header="Éxito">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>

    <!-- Tarjeta con Integración de Navegación -->
    <b-card title="Tarjeta con Integración de Navegación" body-class="text-center" header-tag="nav" class="mb-4">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item active>Activo</b-nav-item>
          <b-nav-item>Inactivo</b-nav-item>
          <b-nav-item disabled>Deshabilitado</b-nav-item>
        </b-nav>
      </template>
      <b-card-text>
        Con texto de apoyo a continuación como una introducción natural a contenido adicional.
      </b-card-text>
      <b-button variant="primary">Ir a algún lugar</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardDemo'
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1.5rem; /* Puedes ajustar este valor según el espacio que desees */
}
</style>
