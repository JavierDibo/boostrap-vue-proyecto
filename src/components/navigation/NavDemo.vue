<!-- NavDemo.vue -->
<template>
  <div class="mb-4">
    <h2>Nav</h2>

    <div class="mb-3">
      <h5>Basic Nav</h5>
      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <div class="mb-3">
      <h5>Nav Tabs</h5>
      <b-nav tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <div class="mb-3">
      <h5>Nav Pills</h5>
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

    <div>
      <h5>Nav with Dropdown</h5>
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item-dropdown text="Dropdown" right>
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  </div>
</template>