<!-- FormRatingDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación Interactiva</h3>
        <b-form-rating v-model="value" variant="warning" class="mb-3"></b-form-rating>
        <p>Valor: {{ value }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación de Solo Lectura con Precision Concreta</h3>
        <b-form-rating v-model="value2" readonly show-value precision="2" variant="success" class="mb-3"></b-form-rating>
        <p>Valor: {{ value2 }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación con Color Personalizado</h3>
        <b-form-rating v-model="value3" color="#ff00ff" size="lg" class="mb-3"></b-form-rating>
        <p>Valor: {{ value3 }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación con 10 Estrellas</h3>
        <b-form-rating v-model="value4" stars="10" class="mb-3"></b-form-rating>
        <p>Valor: {{ value4 }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación en Línea con Botón de Borrar</h3>
        <b-form-rating v-model="value5" inline show-clear variant="danger" class="mb-3"></b-form-rating>
        <p>Valor: {{ value5 }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación con Iconos Personalizados</h3>
        <b-form-rating
            v-model="value6"
            icon-empty="heart"
            icon-half="heart-half"
            icon-full="heart-fill"
            variant="danger"
            class="mb-3"
        ></b-form-rating>
        <p>Valor: {{ value6 }}</p>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h3>Calificación con Internacionalización</h3>
        <b-form-select v-model="locale" :options="locales" class="mb-2"></b-form-select>
        <b-form-rating v-model="value7" :locale="locale" show-value precision="1" class="mb-3"></b-form-rating>
        <p>Valor: {{ value7 }}</p>
      </div>
    </div>
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
        { text: 'Inglés EEUU (en-US)', value: 'en-US' },
        { text: 'Francés (fr)', value: 'fr' },
        { text: 'Persa (fa)', value: 'fa'},
        { text: 'Árabe Egipcio (ar-EG)', value: 'ar-EG' }
      ]
    }
  }
}
</script>
