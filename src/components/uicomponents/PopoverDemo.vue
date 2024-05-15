<template>
  <div>
    <h2 class="my-4">Popover Demo</h2>
    <div class="my-4">
      <b-button id="popover-button-variant" variant="primary">Variants</b-button>
      <b-popover target="popover-button-variant" triggers="hover focus" placement="bottom">
        <template #title>Contextual variants</template>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="danger">Danger</b-button>
      </b-popover>
    </div>

    <div class="my-4">
      <b-button id="popover-interactive">Interactive Content</b-button>
      <b-popover target="popover-interactive" trigger="click" :show.sync="showPopover">
        <template #title>
          <strong>Interactive Popover</strong>
          <b-button @click="showPopover = false" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </b-button>
        </template>

        <b-form-group label="Name:" label-for="name-input">
          <b-form-input id="name-input" size="sm"></b-form-input>
        </b-form-group>

        <b-form-group label="Color:" label-for="color-select">
          <b-form-select id="color-select" size="sm" :options="colors"></b-form-select>
        </b-form-group>

        <b-button size="sm" variant="primary" @click="showPopover = false">Submit</b-button>
      </b-popover>
    </div>

    <div class="my-4">
      <b-button id="popover-placement">Placement</b-button>
      <b-popover target="popover-placement" placement="top">Popover on top</b-popover>
      <b-popover target="popover-placement" placement="right">Popover on right</b-popover>
      <b-popover target="popover-placement" placement="bottom">Popover on bottom</b-popover>
      <b-popover target="popover-placement" placement="left">Popover on left</b-popover>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPopover: false,
      colors: ['Red', 'Green', 'Blue']
    }
  }
}
</script>
