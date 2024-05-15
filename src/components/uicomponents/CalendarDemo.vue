<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center mb-5">Calendario con fecha máxima</h3>
        <b-calendar
            v-model="value"
            :min="min"
            :max="max"
            :date-info-fn="dateClass"
            :date-format-options="{ year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' }"
            :hide-header="false"
            :show-decade-nav="true"
            locale="es-ES"
            selected-variant="success"
            today-variant="info"
            nav-button-variant="primary"
            class="border rounded p-2"
        >
          <div class="d-flex" dir="ltr">
            <b-button size="sm" variant="outline-danger" v-if="value" @click="clearDate">
              Borrar fecha
            </b-button>
            <b-button size="sm" variant="outline-primary" class="ml-auto" @click="setToday">
              Establecer Hoy
            </b-button>
          </div>
        </b-calendar>

        <p class="mt-2">Valor: <b>{{ value }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() - 3);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 3);

    return {
      value: '',
      min: minDate,
      max: maxDate
    };
  },
  methods: {
    setToday() {
      this.value = new Date();
    },
    clearDate() {
      this.value = '';
    },
    dateClass(ymd, date) {
      const weekday = date.getDay();
      if (weekday === 1 || weekday === 3 || weekday === 5) {
        return 'table-info';
      }
      return '';
    }
  }
};
</script>
