<!-- FormSelectDemo.vue -->
<template>
  <div>
    <h2>BootstrapVue Form Select Demo</h2>

    <h3>Single Select with Search</h3>
    <b-form-select v-model="selectedOption" :options="options" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
      </template>
    </b-form-select>
    <p>Selected: <strong>{{ selectedOption }}</strong></p>

    <h3>Multiple Select with Option Groups</h3>
    <b-form-select v-model="selectedOptions" multiple :select-size="6" class="mb-3">
      <b-form-select-option-group label="Group 1">
        <b-form-select-option value="1">Option 1</b-form-select-option>
        <b-form-select-option value="2">Option 2</b-form-select-option>
      </b-form-select-option-group>
      <b-form-select-option-group label="Group 2">
        <b-form-select-option value="3">Option 3</b-form-select-option>
        <b-form-select-option value="4">Option 4</b-form-select-option>
      </b-form-select-option-group>
    </b-form-select>
    <p>Selected: <strong>{{ selectedOptions }}</strong></p>

    <h3>Select with HTML Options</h3>
    <b-form-select v-model="selectedHtmlOption" class="mb-3">
      <b-form-select-option value="A" disabled>Option A</b-form-select-option>
      <b-form-select-option value="B"><strong>Option B</strong></b-form-select-option>
      <b-form-select-option value="C"><em>Option C</em> (italic)</b-form-select-option>
    </b-form-select>
    <p>Selected: <strong>{{ selectedHtmlOption }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      options: [
        { value: 'op1', text: 'Option 1' },
        { value: 'op2', text: 'Option 2' },
        { value: 'op3', text: 'Option 3' },
      ],
      selectedOptions: [],
      selectedHtmlOption: 'A',
    };
  },
};
</script>