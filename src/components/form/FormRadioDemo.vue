<!-- FormRadioDemo.vue -->
<template>
  <div>
    <h2>BootstrapVue Form Radio Demo</h2>
    <b-form-group label="Flashy Button Radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
          v-model="selectedButton"
          :options="buttonOptions"
          :aria-describedby="ariaDescribedby"
          buttons
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
          stacked
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Radios with Contextual State" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
          v-model="selectedState"
          :options="stateOptions"
          :aria-describedby="ariaDescribedby"
          :state="selectedState !== null"
          name="radio-validation"
      >
        <b-form-invalid-feedback :state="selectedState !== null">Please select one</b-form-invalid-feedback>
        <b-form-valid-feedback :state="selectedState !== null">Thank you</b-form-valid-feedback>
      </b-form-radio-group>
    </b-form-group>

    <b-card bg-variant="dark" text-variant="white" class="mt-3">
      <b-card-text>
        Selected Button Radio: <strong>{{ selectedButton }}</strong>
        <br>
        Selected State Radio: <strong>{{ selectedState }}</strong>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedButton: 'radio1',
      buttonOptions: [
        {text: 'Cool Radio', value: 'radio1'},
        {text: 'Super Radio', value: 'radio2'},
        {text: 'Amazing Radio', value: 'radio3'},
      ],
      selectedState: null,
      stateOptions: [
        {text: 'First', value: 'first'},
        {text: 'Second', value: 'second'},
        {text: 'Third', value: 'third'}
      ]
    }
  }
}
</script>
<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>