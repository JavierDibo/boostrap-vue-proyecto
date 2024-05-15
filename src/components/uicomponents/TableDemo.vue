<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col text-center">
        <h1>Tablas</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 offset-md-2">
        <b-table
            id="my-table"
            striped
            hover
            :items="filteredItems"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            @filtered="onFiltered"
            responsive
        >
          <template #cell(actions)="data">
            <b-button size="sm" @click="viewDetails(data.item)">Ver</b-button>
            <b-button size="sm" variant="danger" @click="deleteItem(data.item.id)">Eliminar</b-button>
          </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            aria-controls="my-table"
            class="my-4"
        ></b-pagination>

        <b-form-group label="Filtrar resultados:">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Escribe para filtrar..."></b-form-input>
            <b-input-group-append>
              <b-button @click="filter = ''">Limpiar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'John Doe', age: 30, city: 'Madrid' },
        { id: 2, name: 'Jane Smith', age: 25, city: 'Barcelona' },
        { id: 3, name: 'Paul Walker', age: 40, city: 'Valencia' },
        { id: 4, name: 'Anna Bell', age: 22, city: 'Sevilla' },
        { id: 5, name: 'Carlos Gallego', age: 28, city: 'Madrid' },
        { id: 6, name: 'Laura Gallego', age: 35, city: 'Barcelona' },
        { id: 7, name: 'Manuel Gallego', age: 50, city: 'Bilbao' },
        { id: 8, name: 'Sara Gallego', age: 27, city: 'Valencia' },
        { id: 9, name: 'Luis Gallego', age: 32, city: 'Sevilla' },
        { id: 10, name: 'Miguel Pérez', age: 45, city: 'Granada' },
        { id: 11, name: 'Elena Ruiz', age: 37, city: 'Zaragoza' },
        { id: 12, name: 'David López', age: 29, city: 'Santander' },
      ],
      fields: [
        { key: 'id', label: 'ID', sortable: true},
        { key: 'name', label: 'Nombre' },
        { key: 'age', label: 'Edad' },
        { key: 'city', label: 'Ciudad' },
        { key: 'actions', label: 'Acciones' },
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      filter: '',
    }
  },
  computed: {
    filteredItems() {
      if (this.filter) {
        return this.items.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(this.filter.toLowerCase())
            )
        )
      }
      return this.items
    }
  },
  methods: {
    viewDetails(item) {
      alert(`Detalles de ${item.name}: Edad ${item.age}, Ciudad ${item.city}`);
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
    }
  },
  mounted() {
    this.totalRows = this.items.length;
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
