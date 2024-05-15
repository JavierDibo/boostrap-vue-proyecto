<template>
  <div>
    <h2>Form Radio Demo</h2>

    <!-- Inline radios -->
    <h3>Inline Radios</h3>
    <b-form-group label="Inline radios">
      <b-form-radio v-model="ex1Selected" name="ex1-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="ex1Selected" name="ex1-radios" value="B">Option B</b-form-radio>
    </b-form-group>
    <p>Selected: <strong>{{ ex1Selected }}</strong></p>

    <!-- Stacked radios -->
    <h3>Stacked Radios</h3>
    <b-form-radio-group
        v-model="ex2Selected"
        :options="ex2Options"
        stacked
        name="ex2-radios"
    ></b-form-radio-group>
    <p>Selected: <strong>{{ ex2Selected }}</strong></p>

    <!-- Button style radios -->
    <h3>Button Style Radios</h3>
    <b-form-radio-group
        v-model="ex3Selected"
        :options="ex3Options"
        buttons
        button-variant="outline-primary"
        size="lg"
        name="ex3-radio-btn"
    ></b-form-radio-group>
    <p>Selected: <strong>{{ ex3Selected }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ex1Selected: 'A',
      ex2Selected: 'first',
      ex2Options: [
        { text: 'First Option', value: 'first' },
        { text: 'Second Option', value: 'second' },
        { text: 'Third Option', value: 'third' }
      ],
      ex3Selected: 'radio1',
      ex3Options: [
        { text: 'Radio 1', value: 'radio1' },
        { text: 'Radio 2', value: 'radio2' },
        { text: 'Radio 3', value: 'radio3' }
      ]
    }
  }
}
</script>