<template>
  <div>
    <h2>Aspect Ratio Demo</h2>

    <b-form-group label="Select an aspect ratio:" label-for="ratio-select" class="mb-3">
      <b-form-select id="ratio-select" v-model="selectedRatio" :options="ratioOptions"></b-form-select>
    </b-form-group>

    <b-card>
      <b-aspect :aspect="selectedRatio">
        <div class="content" :style="{ backgroundColor: bgColor }">
          <h3>{{ selectedRatio }}</h3>
          <p>This content will always maintain the selected aspect ratio.</p>
          <b-button @click="changeColor">Change Color</b-button>
        </div>
      </b-aspect>
    </b-card>

    <h3 class="mt-4">Responsive Aspect Ratios</h3>
    <b-row>
      <b-col md="4">
        <b-aspect aspect="1:1">
          <div class="content ratio-1-1">
            <h4>1:1 (Square)</h4>
          </div>
        </b-aspect>
      </b-col>
      <b-col md="4">
        <b-aspect aspect="4:3">
          <div class="content ratio-4-3">
            <h4>4:3 (SD)</h4>
          </div>
        </b-aspect>
      </b-col>
      <b-col md="4">
        <b-aspect aspect="16:9">
          <div class="content ratio-16-9">
            <h4>16:9 (HD)</h4>
          </div>
        </b-aspect>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRatio: '16:9',
      bgColor: '#007bff',
      ratioOptions: [
        { value: '1:1', text: '1:1 (Square)' },
        { value: '4:3', text: '4:3 (SD)' },
        { value: '16:9', text: '16:9 (HD)' },
        { value: '1.85:1', text: '1.85:1 (Widescreen)' },
        { value: '2.39:1', text: '2.39:1 (Anamorphic)' },
      ],
    };
  },
  methods: {
    changeColor() {
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      this.bgColor = randomColor;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
}

.ratio-1-1 { background-color: #ff8c00; }
.ratio-4-3 { background-color: #9400d3; }
.ratio-16-9 { background-color: #20c997; }
</style>