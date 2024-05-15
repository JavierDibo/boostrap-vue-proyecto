<!-- FormTextAreaDemo.vue -->
<template>
  <div>
    <h2>b-form-textarea Demo</h2>

    <b-card class="mb-3">
      <b-form-textarea
          v-model="text"
          placeholder="Enter your message..."
          rows="3"
          max-rows="6"
          :formatter="formatter"
          :state="textState"
      ></b-form-textarea>
      <b-form-text v-if="!textState">
        Please enter at least 10 characters.
      </b-form-text>
    </b-card>

    <b-card>
      <h4>Preview:</h4>
      <pre class="rounded p-2 bg-light">{{ text || 'Enter your message above' }}</pre>
    </b-card>

    <b-card class="mt-3">
      <h5>Text analysis:</h5>
      <p>Character count: {{ charCount }}</p>
      <p>Word count: {{ wordCount }}</p>
      <p>
        Contains link?
        <b-badge :variant="containsLink ? 'success' : 'danger'">
          {{ containsLink ? 'Yes' : 'No' }}
        </b-badge>
      </p>
      <p>
        {{ remainingChars }} character{{ remainingChars === 1 ? '' : 's' }} remaining
        (max 200)
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
      return value.toLowerCase().replace(/(?:https?|ftp):\/\/[\n\S]+/g, '<link>')
    }
  }
}
</script>