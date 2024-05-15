<template>
  <div>
    <h2>Nav Component</h2>

    <h3>Basic Nav</h3>
    <b-nav>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>

    <h3>Nav Tabs</h3>
    <b-nav tabs>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>

    <h3>Nav Pills</h3>
    <b-nav pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>

    <h3>Nav with Dropdown</h3>
    <b-nav pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item-dropdown text="Dropdown" right>
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>