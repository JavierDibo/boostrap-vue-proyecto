<template>
  <div>
    <h2>BootstrapVue Time Component Demo</h2>

    <b-container>
      <b-row class="my-1" align-v="center">
        <b-col sm="2"><label for="locale-select">Locale:</label></b-col>
        <b-col sm="10">
          <b-form-select id="locale-select" v-model="locale" :options="localeOptions" class="mb-2"></b-form-select>
        </b-col>
      </b-row>

      <b-time
          v-model="value"
          :locale="locale"
          show-seconds
          class="border rounded p-2 mb-3"
          v-bind="labels[locale] || {}"
          @context="onContext"
      >
        <template #default>
          <div class="d-flex flex-row-reverse">
            <b-button size="sm" variant="outline-primary" @click="setNow" class="ml-2">Set Now</b-button>
            <b-button v-if="value" size="sm" variant="outline-danger" @click="clearTime">Clear</b-button>
          </div>
        </template>
      </b-time>

      <h5>Value</h5>
      <p>{{ value || 'No time selected' }}</p>

      <h5>Context</h5>
      <pre class="small">{{ context }}</pre>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      context: {},
      locale: 'en-US',
      localeOptions: [
        {value: 'en-US', text: 'English US'},
        {value: 'fr', text: 'French'},
        {value: 'es', text: 'Spanish'},
        {value: 'ar-EG', text: 'Arabic Egyptian'},
        {value: 'zh', text: 'Chinese'}
      ],
      labels: {
        'es': {
          labelHours: 'Horas',
          labelMinutes: 'Minutos',
          labelSeconds: 'Segundos',
          labelSelected: 'Hora seleccionada',
          labelNoTimeSelected: 'Ninguna hora seleccionada'
        },
        'ar-EG': {
          labelAmpm: 'صباحا مساء',
          labelAm: 'ص',
          labelPm: 'م',
          labelHours: 'ساعات',
          labelMinutes: 'الدقائق',
          labelSeconds: 'ثواني',
          labelSelected: 'الوقت المحدد',
          labelNoTimeSelected: 'لا وقت المختار',
        },
        'zh': {
          labelHours: '小时',
          labelMinutes: '分钟',
          labelSeconds: '秒',
          labelAmpm: '上午下午',
          labelAm: '上午',
          labelPm: '下午',
          labelSelected: '选定时间',
          labelNoTimeSelected: '没有选择时间'
        }
      }
    }
  },
  methods: {
    setNow() {
      const now = new Date();
      this.value = now.toTimeString().slice(0,8);
    },
    clearTime() {
      this.value = '';
    },
    onContext(ctx) {
      this.context = ctx;
    }
  }
}
</script>