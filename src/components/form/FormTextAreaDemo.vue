<!-- FormTextAreaDemo.vue -->
<template>
  <div class="container">
    <div class="row justify-content-center mb-4 mt-4">
      <div class="col-md-8 text-center">
        <h2>Area de texto</h2>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="mb-3 p-3 border">
          <b-form-textarea
              v-model="text"
              placeholder="Ingresa tu mensaje..."
              rows="3"
              max-rows="6"
              :formatter="formatter"
              :state="textState"
          ></b-form-textarea>
          <b-form-text v-if="!textState">
            Por favor ingresa al menos 10 caracteres.
          </b-form-text>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="p-3 border">
          <h4>Vista previa:</h4>
          <pre class="rounded p-2 bg-light">{{ text || 'Ingresa tu mensaje arriba' }}</pre>
        </b-card>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <b-card bg-variant="light" class="p-3 border">
          <h5>Análisis del texto:</h5>
          <p>Contador de caracteres: {{ charCount }}</p>
          <p>Contador de palabras: {{ wordCount }}</p>
          <p>
            ¿Contiene enlace?
            <b-badge :variant="containsLink ? 'success' : 'danger'" class="text-light">
              {{ containsLink ? 'Sí' : 'No' }}
            </b-badge>
          </p>
          <p>
            {{ remainingChars }} carácter{{ remainingChars === 1 ? '' : 'es' }} restantes
            (máximo 200)
          </p>
          <b-progress
              :value="charCount"
              :max="200"
              :variant="progressVariant"
              :animated="charCount > 180"
              height="1.5rem"
          ></b-progress>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    textState() {
      return this.text.length >= 10
    },
    charCount() {
      return this.text.length
    },
    wordCount() {
      return this.text.trim().split(/\s+/).length
    },
    remainingChars() {
      return 200 - this.charCount
    },
    progressVariant() {
      if (this.charCount < 180) {
        return 'success'
      } else if (this.charCount < 190) {
        return 'warning'
      } else {
        return 'danger'
      }
    },
    containsLink() {
      const linkRegex = /(https?:\/\/\S+)/g
      return linkRegex.test(this.text)
    }
  },
  methods: {
    formatter(value) {
      return value.toLowerCase().replace(/(?:https?|ftp):\/\/[\n\S]+/g, '<enlace>')
    }
  }
}
</script>
