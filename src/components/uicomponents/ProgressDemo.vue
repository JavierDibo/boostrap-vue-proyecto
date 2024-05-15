<template>
  <div>
    <h2>Progress Bar Demo</h2>
    <h3>Animated Striped Progress Bar</h3>
    <b-progress :value="animatedValue" :max="max" striped animated variant="info" class="mb-4"></b-progress>

    <h3>Stacked Progress Bars</h3>
    <b-progress :max="max" height="30px" class="mb-4">
      <b-progress-bar variant="success" :value="values[0]">
        <strong>Success</strong>
      </b-progress-bar>
      <b-progress-bar variant="warning" :value="values[1]">
        <strong>Warning</strong>
      </b-progress-bar>
      <b-progress-bar variant="danger" :value="values[2]">
        <strong>Danger</strong>
      </b-progress-bar>
    </b-progress>

    <h3>Progress Bar with Custom Labels (Estatica)</h3>
    <b-progress :max="max" height="30px" class="mb-4">
      <b-progress-bar variant="primary" :value="75" :label="`${((75 / max) * 100).toFixed(1)}%`"></b-progress-bar>
      <b-progress-bar variant="secondary" :value="25" :label-html="`<strong>${25}/${max}</strong>`"></b-progress-bar>
    </b-progress>

    <h3>Thin Progress Bars with Precision</h3>
    <b-progress height="2px" :value="preciseDemoValue" :max="max" :precision="2" variant="success"
                class="mb-2"></b-progress>
    <b-progress height="2px" :value="preciseDemoValue*0.8" :max="max" :precision="2" variant="warning"
                class="mb-2"></b-progress>
    <b-progress height="2px" :value="preciseDemoValue*0.6" :max="max" :precision="2" variant="danger"></b-progress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animatedValue: 75,
      preciseDemoValue: 25.556,
      values: [40, 35, 25],
      max: 100
    }
  },
  mounted() {
    setInterval(() => {
      this.animatedValue = 25 + Math.random() * 75;
      this.preciseDemoValue = Math.random() * this.max;
      this.values = this.values.map(() => Math.random() * 50);
    }, 2000);
  }
}
</script>
