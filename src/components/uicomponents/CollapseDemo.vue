<template>
  <div class="collapse-demo">
    <h2>Collapse</h2>

    <!-- Collapse básico -->
    <div class="collapse-section">
      <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2">Alternar Colapso</b-button>
      <b-collapse id="collapse-1">
        <b-card>
          <p class="card-text">Contenido del colapso aquí</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Alternar Colapso Interno</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>¡Hola!</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>

    <!-- Collapse con visibilidad inicial -->
    <div class="collapse-section">
      <b-button v-b-toggle.collapse-2 class="m-1">Alternar Colapso</b-button>
      <b-collapse id="collapse-2" visible class="mt-2">
        <b-card>¡Debería empezar abierto!</b-card>
      </b-collapse>
    </div>

    <!-- Collapse con v-model -->
    <div class="collapse-section">
      <b-button
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-3"
          @click="visible = !visible"
      >
        Alternar Colapso
      </b-button>
      <b-collapse id="collapse-3" v-model="visible" class="mt-2">
        <b-card>¡Debería empezar abierto con v-model!</b-card>
      </b-collapse>
    </div>

    <!-- Colapsos múltiples con un botón -->
    <div class="collapse-section">
      <b-button v-b-toggle.collapse-a.collapse-b class="mb-2">Alternar Colapso A y B</b-button>
      <b-collapse id="collapse-a" class="mt-2">
        <b-card>¡Soy contenido colapsable A!</b-card>
      </b-collapse>
      <b-collapse id="collapse-b" class="mt-2">
        <b-card>¡Soy contenido colapsable B!</b-card>
      </b-collapse>
    </div>

    <!-- Acordeón -->
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">Acordeón 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>Empiezo abierto porque <code>visible</code> es <code>true</code></b-card-text>
            <b-card-text>{{ texto }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Acordeón 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ texto }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info">Acordeón 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ texto }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <!-- Collapse con CSS personalizado -->
    <div class="collapse-section">
      <b-button v-b-toggle:my-collapse>
        <span class="when-open">Cerrar</span><span class="when-closed">Abrir</span> Mi Colapso
      </b-button>
      <b-collapse id="my-collapse" class="mt-2">
        <b-card>
          <p>Contenido dentro del colapso personalizado.</p>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      texto: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>

<style scoped>
.collapse-demo {
  padding: 20px;
}

.collapse-section {
  margin-bottom: 20px;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

b-card {
  margin-top: 10px;
}

b-button {
  margin-top: 10px;
}
</style>
