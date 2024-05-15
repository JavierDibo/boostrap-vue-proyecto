<!-- FormDemo.vue -->
<template>
  <div>
    <h2>Checkbox Examples</h2>

    <h3>Single Checkbox</h3>
    <b-form-checkbox v-model="singleCheckbox" value="accepted" unchecked-value="not_accepted">
      I accept the terms and use
    </b-form-checkbox>
    <p>State: <strong>{{ singleCheckbox }}</strong></p>

    <h3>Checkbox Group</h3>
    <b-form-group label="Using options array:">
      <b-form-checkbox-group v-model="selectedFruits" :options="fruitOptions" name="fruits"></b-form-checkbox-group>
    </b-form-group>
    <p>Selected: <strong>{{ selectedFruits }}</strong></p>

    <h3>Stacked Checkboxes</h3>
    <b-form-checkbox-group v-model="selectedFlavors" :options="flavorOptions" name="flavors" stacked></b-form-checkbox-group>
    <p>Selected: <strong>{{ selectedFlavors }}</strong></p>

    <h3>Button Style Checkboxes</h3>
    <b-form-checkbox-group v-model="selectedButtons" :options="buttonOptions" name="buttons" buttons></b-form-checkbox-group>
    <p>Selected: <strong>{{ selectedButtons }}</strong></p>

    <h3>Switch Style Checkboxes</h3>
    <b-form-checkbox-group v-model="selectedSwitches" :options="switchOptions" name="switches" switches></b-form-checkbox-group>
    <p>Selected: <strong>{{ selectedSwitches }}</strong></p>

    <h3>Indeterminate State</h3>
    <b-form-checkbox v-model="indeterminateCheckbox" :indeterminate.sync="isIndeterminate">
      Click me to see what happens
    </b-form-checkbox>
    <p>Checked: <strong>{{ indeterminateCheckbox }}</strong></p>
    <p>Indeterminate: <strong>{{ isIndeterminate }}</strong></p>
    <b-button @click="isIndeterminate = !isIndeterminate">Toggle Indeterminate State</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleCheckbox: 'not_accepted',
      selectedFruits: [],
      fruitOptions: ['Apple', 'Banana', 'Orange'],
      selectedFlavors: [],
      flavorOptions: [
        { text: 'Chocolate', value: 'chocolate' },
        { text: 'Vanilla', value: 'vanilla' },
        { text: 'Strawberry', value: 'strawberry' }
      ],
      selectedButtons: [],
      buttonOptions: [
        { text: 'Left', value: 'left' },
        { text: 'Middle', value: 'middle' },
        { text: 'Right', value: 'right' }
      ],
      selectedSwitches: [],
      switchOptions: ['Red', 'Green', 'Blue'],
      indeterminateCheckbox: false,
      isIndeterminate: true
    };
  }
};
</script>