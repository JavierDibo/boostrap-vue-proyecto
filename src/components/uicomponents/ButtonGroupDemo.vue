<template>
  <div>
    <h2>Button Group Demo</h2>

    <h3>Basic Button Group</h3>
    <b-button-group>
      <b-button variant="primary">Left</b-button>
      <b-button variant="primary">Middle</b-button>
      <b-button variant="primary">Right</b-button>
    </b-button-group>

    <h3 class="mt-4">Button Group Sizing</h3>
    <div>
      <b-button-group size="sm">
        <b-button variant="info">Small</b-button>
        <b-button variant="info">Buttons</b-button>
      </b-button-group>
    </div>
    <div class="my-3">
      <b-button-group>
        <b-button variant="success">Default</b-button>
        <b-button variant="success">Buttons</b-button>
      </b-button-group>
    </div>
    <div>
      <b-button-group size="lg">
        <b-button variant="warning">Large</b-button>
        <b-button variant="warning">Buttons</b-button>
      </b-button-group>
    </div>

    <h3 class="mt-4">Vertical Button Group</h3>
    <b-button-group vertical>
      <b-button variant="secondary">Top</b-button>
      <b-button variant="secondary">Middle</b-button>
      <b-button variant="secondary">Bottom</b-button>
    </b-button-group>

    <h3 class="mt-4">Button Group with Dropdown Menu</h3>
    <b-button-group>
      <b-button variant="danger">Button</b-button>
      <b-dropdown variant="danger" right text="Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown variant="danger" right split text="Split Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroupDemo'
}
</script>