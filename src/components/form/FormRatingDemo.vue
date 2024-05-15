<!-- FormRatingDemo.vue -->
<template>
  <div>
    <h2>BootstrapVue Form Rating Demo</h2>

    <h3>Interactive Rating</h3>
    <b-form-rating v-model="value" variant="warning" class="mb-3"></b-form-rating>
    <p>Value: {{ value }}</p>

    <h3>Readonly Rating with Precision</h3>
    <b-form-rating v-model="value2" readonly show-value precision="2" variant="success" class="mb-3"></b-form-rating>
    <p>Value: {{ value2 }}</p>

    <h3>Rating with Custom Color</h3>
    <b-form-rating v-model="value3" color="#ff00ff" size="lg" class="mb-3"></b-form-rating>
    <p>Value: {{ value3 }}</p>

    <h3>Rating with 10 Stars</h3>
    <b-form-rating v-model="value4" stars="10" class="mb-3"></b-form-rating>
    <p>Value: {{ value4 }}</p>

    <h3>Inline Rating with Clear Button</h3>
    <b-form-rating v-model="value5" inline show-clear variant="danger" class="mb-3"></b-form-rating>
    <p>Value: {{ value5 }}</p>

    <h3>Rating with Custom Icons</h3>
    <b-form-rating
        v-model="value6"
        icon-empty="heart"
        icon-half="heart-half"
        icon-full="heart-fill"
        variant="danger"
        class="mb-3"
    ></b-form-rating>
    <p>Value: {{ value6 }}</p>

    <h3>Rating with Internationalization</h3>
    <b-form-select v-model="locale" :options="locales" class="mb-2"></b-form-select>
    <b-form-rating v-model="value7" :locale="locale" show-value precision="1" class="mb-3"></b-form-rating>
    <p>Value: {{ value7 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
      value2: 4.25,
      value3: 5,
      value4: 7,
      value5: 2,
      value6: 3,
      value7: 3.5,
      locale: 'en-US',
      locales: [
        { text: 'English US (en-US)', value: 'en-US' },
        { text: 'French (fr)', value: 'fr' },
        { text: 'Persian (fa)', value: 'fa'},
        { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' }
      ]
    }
  }
}
</script>