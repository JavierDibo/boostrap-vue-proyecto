<template>
  <div>
    <b-button v-b-modal.modal-flashy variant="primary" size="lg">Launch Flashy Modal</b-button>

    <b-modal id="modal-flashy" centered title="Flashy Modal" header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="danger" footer-text-variant="light" footer-class="text-right">
      <template #modal-header="{ close }">
        <h5>
          <b-icon-lightning-charge></b-icon-lightning-charge>
          Flashy Modal
        </h5>
        <b-button size="sm" variant="outline-light" @click="close()">
          <b-icon-x></b-icon-x>
        </b-button>
      </template>

      <b-carousel controls indicators :interval="4000" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;">
        <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
        <b-carousel-slide caption="Second slide" img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
        <b-carousel-slide caption="Third slide" img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      </b-carousel>

      <b-form @submit.prevent="handleSubmit" class="mt-3">
        <label for="name-input" class="sr-only">Name:</label>
        <b-input-group prepend="Name:" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input id="name-input" placeholder="Enter name"></b-form-input>
        </b-input-group>

        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>

      <template #modal-footer="{ ok, cancel }">
        <b>Custom Footer</b>
        <b-button size="sm" variant="warning" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="success" @click="ok()">
          OK
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      // Form submit logic goes here
      this.$bvModal.msgBoxOk('Form submitted!')
    }
  }
}
</script>