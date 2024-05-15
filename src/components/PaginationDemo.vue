<!-- PaginationDemo.vue -->
<template>
  <div>
    <h1>Pagination Component</h1>

    <h2>Basic Usage</h2>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
    ></b-table>

    <h2>Customizing Appearance</h2>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
    ></b-pagination>

    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-4"
    >
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
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

    <h2>Goto First/Last Button Type</h2>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
    ></b-pagination>

    <h2>Button Size</h2>
    <b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
    <b-pagination v-model="currentPage" :total-rows="rows" class="my-3"></b-pagination>
    <b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>

    <h2>Pill Style</h2>
    <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm"></b-pagination>
    <b-pagination v-model="currentPage" pills :total-rows="rows" class="my-3"></b-pagination>
    <b-pagination v-model="currentPage" pills :total-rows="rows" size="lg"></b-pagination>

    <h2>Alignment</h2>
    <b-pagination v-model="currentPage" :total-rows="rows" align="center" class="my-3"></b-pagination>
    <b-pagination v-model="currentPage" :total-rows="rows" align="right" class="my-3"></b-pagination>
    <b-pagination v-model="currentPage" :total-rows="rows" align="fill"></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
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