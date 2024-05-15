<template>
  <div>
    <h2 class="mb-3">Spinners Demo</h2>

    <h3>Spinner Variants</h3>
    <div class="text-center mb-3 d-flex justify-content-between">
      <b-spinner v-for="variant in variants" :variant="variant" :key="variant"></b-spinner>
    </div>

    <div class="text-center mb-4 d-flex justify-content-between">
      <b-spinner v-for="variant in variants" :variant="variant" :key="variant" type="grow"></b-spinner>
    </div>

    <h3>Custom Sizes</h3>
    <div class="mb-4">
      <b-spinner style="width: 5rem; height: 5rem;" label="Extra Large Spinner"></b-spinner>
      <b-spinner style="width: 4rem; height: 4rem;" label="Large Spinner" type="grow" variant="success"></b-spinner>
      <b-spinner style="width: 2rem; height: 2rem;" label="Medium Spinner" variant="danger"></b-spinner>
      <b-spinner small label="Small Spinner" type="grow" variant="info"></b-spinner>
    </div>

    <h3>Spinners in Buttons</h3>
    <div class="mb-4">
      <b-button variant="primary" class="mr-2" disabled>
        <b-spinner small></b-spinner>
        Loading...
      </b-button>

      <b-button variant="success" disabled>
        <b-spinner small type="grow"></b-spinner>
        Processing...
      </b-button>
    </div>

    <h3>Animated Text with Spinner</h3>
    <div class="d-flex align-items-center mb-4">
      <strong class="mr-3">Loading</strong>
      <b-spinner variant="primary" small></b-spinner>
      <strong class="ml-3">Your Content</strong>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
    }
  }
}
</script>