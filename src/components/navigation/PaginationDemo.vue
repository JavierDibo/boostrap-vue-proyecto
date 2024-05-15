<!-- PaginationDemo.vue -->
<template>
  <div class="mb-4">
    <h2>Paginación</h2>
    <div class="mb-3">
      <h5>Uso Básico</h5>
      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="mi-tabla"
      ></b-pagination>
      <p class="mt-2">Página Actual: {{ currentPage }}</p>
      <b-table
          id="mi-tabla"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
      ></b-table>
    </div>

    <div class="mb-4">
      <h5>Personalización de la Apariencia</h5>
      <b-pagination
          v-model="currentPageCustom"
          :total-rows="rows"
          :per-page="perPage"
          first-text="Primera"
          prev-text="Anterior"
          next-text="Siguiente"
          last-text="Última"
      ></b-pagination>

      <b-pagination
          v-model="currentPageCustom"
          :total-rows="rows"
          :per-page="perPage"
          class="mt-3"
      >
        <template #first-text><span class="text-success">Primera</span></template>
        <template #prev-text><span class="text-danger">Anterior</span></template>
        <template #next-text><span class="text-warning">Siguiente</span></template>
        <template #last-text><span class="text-info">Última</span></template>
        <template #ellipsis-text>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
        </template>
        <template #page="{ page, active }">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </template>
      </b-pagination>
    </div>

    <div class="mb-3">
      <h5>Ir a Primer/Último Botón</h5>
      <b-pagination
          v-model="currentPageFirstLast"
          :total-rows="rows"
          :per-page="perPage"
          first-number
          last-number
      ></b-pagination>
    </div>

    <div class="mb-3">
      <h5>Tamaño de Botón</h5>
      <b-pagination v-model="currentPageSizeSmall" :total-rows="rows" size="sm"></b-pagination>
      <b-pagination v-model="currentPageSizeDefault" :total-rows="rows" class="my-2"></b-pagination>
      <b-pagination v-model="currentPageSizeLarge" :total-rows="rows" size="lg"></b-pagination>
    </div>

    <div class="mb-3">
      <h5>Estilo de Píldora</h5>
      <b-pagination v-model="currentPagePillsSmall" pills :total-rows="rows" size="sm"></b-pagination>
      <b-pagination v-model="currentPagePillsDefault" pills :total-rows="rows" class="my-2"></b-pagination>
      <b-pagination v-model="currentPagePillsLarge" pills :total-rows="rows" size="lg"></b-pagination>
    </div>

    <div>
      <h5>Alineación</h5>
      <b-pagination v-model="currentPageAlignCenter" :total-rows="rows" align="center" class="mb-2"></b-pagination>
      <b-pagination v-model="currentPageAlignRight" :total-rows="rows" align="right" class="mb-2"></b-pagination>
      <b-pagination v-model="currentPageAlignFill" :total-rows="rows" align="fill"></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      currentPageCustom: 1,
      currentPageFirstLast: 1,
      currentPageSizeSmall: 1,
      currentPageSizeDefault: 1,
      currentPageSizeLarge: 1,
      currentPagePillsSmall: 1,
      currentPagePillsDefault: 1,
      currentPagePillsLarge: 1,
      currentPageAlignCenter: 1,
      currentPageAlignRight: 1,
      currentPageAlignFill: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
        { id: 10, first_name: 'Joe', last_name: 'Rockhead' },
        { id: 11, first_name: 'Stoney', last_name: 'Curtis' },
        { id: 12, first_name: 'Mr.', last_name: 'Slate' },
        { id: 13, first_name: 'Dino', last_name: 'The Dinosaur' },
        { id: 14, first_name: 'Hoppy', last_name: 'The Kangaroo' },
        { id: 15, first_name: 'Gazoo', last_name: 'The Martian' }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>
