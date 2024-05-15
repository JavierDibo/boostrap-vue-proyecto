<template>
  <div>
    <h2>b-overlay Demo</h2>
    <!-- Overlay with custom content and spinner -->
    <b-card class="mb-3">
      <b-overlay :show="showOverlay1" rounded="sm" spinner-variant="primary" spinner-type="grow" spinner-small>
        <b-card-text>
          This card has a custom overlay with a small growing primary spinner.
        </b-card-text>
        <template #overlay>
          <div class="text-center">
            <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
            <p class="mb-0">Please wait...</p>
          </div>
        </template>
      </b-overlay>
      <b-button @click="showOverlay1 = !showOverlay1" variant="primary" class="mt-3">
        Toggle Overlay
      </b-button>
    </b-card>

    <!-- Overlay with custom transition and blur -->
    <b-card>
      <b-overlay :show="showOverlay2" blur="5px" opacity="0.8" transition="fade" rounded="lg">
        <b-card-text>
          This card has a custom overlay with a fade transition and background blur effect.
        </b-card-text>
      </b-overlay>
      <b-button @click="showOverlay2 = !showOverlay2" variant="primary" class="mt-3">
        Toggle Overlay
      </b-button>
    </b-card>

    <!-- Overlay with form and confirmation prompt -->
    <b-form class="my-4 position-relative p-3 border rounded" @submit.prevent="handleSubmit">
      <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" v-model="email" :disabled="formBusy"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="formBusy">Submit</b-button>

      <b-overlay :show="formBusy" no-wrap>
        <template #overlay>
          <div v-if="showConfirm" class="text-center p-4 bg-light rounded">
            <p class="mb-2"><strong>Are you sure?</strong></p>
            <div>
              <b-button size="sm" @click="confirmed" variant="success">Yes</b-button>
              <b-button size="sm" @click="formBusy = false" variant="outline-secondary" class="ml-2">No</b-button>
            </div>
          </div>
          <div v-else class="d-flex align-items-center">
            <b-spinner class="mx-1"></b-spinner>
            <strong>Processing...</strong>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showOverlay1: false,
      showOverlay2: false,
      formBusy: false,
      showConfirm: false,
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      this.formBusy = true
      this.showConfirm = true
    },
    confirmed() {
      this.showConfirm = false
      setTimeout(() => {
        this.formBusy = false
        this.email = ''
      }, 2000)
    }
  }
}
</script>
