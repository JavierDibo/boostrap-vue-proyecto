<template>
  <div>
    <b-button-toolbar key-nav aria-label="Flashy Button Toolbar Demo">
      <b-button-group size="lg" class="mx-1">
        <b-button variant="primary">
          <b-icon icon="star-fill" animation="throb"></b-icon> New
        </b-button>
        <b-button variant="info">
          <b-icon icon="pencil-square" animation="fade"></b-icon> Edit
        </b-button>
        <b-button variant="danger">
          <b-icon icon="trash" animation="cylon"></b-icon> Delete
        </b-button>
      </b-button-group>

      <b-dropdown size="lg" variant="success" class="mx-1" right text="Menu">
        <b-dropdown-item>
          <b-icon icon="gear-fill" class="mr-2"></b-icon>Settings
        </b-dropdown-item>
        <b-dropdown-item>
          <b-icon icon="person-fill" class="mr-2"></b-icon>Profile
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>
          <b-icon icon="box-arrow-right" class="mr-2"></b-icon>Logout
        </b-dropdown-item>
      </b-dropdown>

      <b-input-group size="lg" prepend="$" append=".00">
        <b-form-input value="100" class="text-right"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-secondary" disabled>Donate</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-button-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ButtonToolbarDemo'
}
</script>