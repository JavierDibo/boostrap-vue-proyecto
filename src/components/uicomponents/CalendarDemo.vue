<template>
  <div>
    <b-calendar
        v-model="value"
        :min="min"
        :max="max"
        :date-info-fn="dateClass"
        :date-format-options="{ year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' }"
        :hide-header="false"
        :show-decade-nav="true"
        locale="en-US"
        selected-variant="success"
        today-variant="info"
        nav-button-variant="primary"
        class="border rounded p-2"
    >
      <div class="d-flex" dir="ltr">
        <b-button size="sm" variant="outline-danger" v-if="value" @click="clearDate">
          Clear date
        </b-button>
        <b-button size="sm" variant="outline-primary" class="ml-auto" @click="setToday">
          Set Today
        </b-button>
      </div>
    </b-calendar>

    <p class="mt-2">Value: <b>{{ value }}</b></p>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 3)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 3)

    return {
      value: '',
      min: minDate,
      max: maxDate
    }
  },
  methods: {
    setToday() {
      this.value = new Date()
    },
    clearDate() {
      this.value = ''
    },
    dateClass(ymd, date) {
      const weekday = date.getDay()
      if (weekday === 1 || weekday === 3 || weekday === 5) {
        return 'table-info'
      }
      return ''
    }
  }
}
</script>