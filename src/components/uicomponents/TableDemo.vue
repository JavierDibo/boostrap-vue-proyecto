<template>
  <div>
    <b-table
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        responsive="sm"
        primary-key="id"
        selectable
        select-mode="single"
        @row-selected="onRowSelected"
        show-empty
        empty-text="No matching records found"
        :busy="isBusy"
        :tbody-transition-props="transProps"
        sticky-header
        head-variant="dark"
        dark
        bordered
        striped
        hover
        small
    >
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>

      <template #cell(status)="data">
        <b-badge
            :variant="
            data.value === 'Active' ? 'success' :
            data.value === 'Inactive' ? 'danger' : 'secondary'
          "
            pill
        >
          {{ data.value }}
        </b-badge>
      </template>

      <template #cell(progress)="data">
        <b-progress
            :value="data.value"
            variant="info"
            striped
            animated
            :max="100"
            height="1rem"
            class="my-2"
        >
          <strong>{{ data.value }}%</strong>
        </b-progress>
      </template>

      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>

    <b-alert
        class="mt-2 mb-5"
        v-model="showAlert"
        dismissible
        variant="success"
    >
      Selected user ID: {{ selectedUserId }}
    </b-alert>

    <b-button variant="primary" @click="toggleBusy">Toggle Busy State</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transProps: {
        name: 'flip-list'
      },
      isBusy: false,
      sortBy: 'progress',
      sortDesc: true,
      fields: [
        { key: 'selected', label: '' },
        { key: 'id', label: 'ID', sortable: true },
        { key: 'first_name', label: 'First Name', sortable: true },
        { key: 'last_name', label: 'Last Name', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
        { key: 'progress', label: 'Progress', sortable: true }
      ],
      items: [
        { id: 1, first_name: 'Kristen', last_name: 'Snow', status: 'Active', progress: 53},
        { id: 2, first_name: 'Josh', last_name: 'Rollins', status: 'Inactive', progress: 28},
        { id: 3, first_name: 'Maggie', last_name: 'Collins', status: 'Active', progress: 92},
        { id: 4, first_name: 'Devin', last_name: 'White', status: 'Active', progress: 70}
      ],
      selectedUserId: null,
      showAlert: false
    }
  },
  methods: {
    onRowSelected(items) {
      this.selectedUserId = items[0].id
      this.showAlert = true
    },
    toggleBusy() {
      this.isBusy = !this.isBusy
    }
  }
}
</script>

<style>
table.flip-list-move {
  transition: transform 1s;
}
</style>