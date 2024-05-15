<template>
  <div>
    <h2>BootstrapVue List Group Demo</h2>

    <h3>Horizontal List Group with Contextual Variants</h3>
    <b-list-group horizontal="md">
      <b-list-group-item variant="primary" href="#">Primary</b-list-group-item>
      <b-list-group-item variant="secondary" href="#">Secondary</b-list-group-item>
      <b-list-group-item variant="success" href="#">Success</b-list-group-item>
      <b-list-group-item variant="danger" href="#">Danger</b-list-group-item>
      <b-list-group-item variant="warning" href="#">Warning</b-list-group-item>
      <b-list-group-item variant="info" href="#">Info</b-list-group-item>
    </b-list-group>

    <h3 class="mt-4">List Group with Custom Content and Badges</h3>
    <b-list-group>
      <b-list-group-item href="#" active class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Active List Group Item</h5>
          <b-badge variant="primary" pill>14</b-badge>
        </div>
        <p class="mb-1">
          Custom content for the active list group item. Donec id elit non mi porta gravida at eget metus.
        </p>
      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List Group Item with Badge</h5>
          <b-badge variant="success" pill>2</b-badge>
        </div>
        <p class="mb-1">
          Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus.
        </p>
      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List Group Item with Badge</h5>
          <b-badge variant="danger" pill>1</b-badge>
        </div>
        <p class="mb-1">
          Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus.
        </p>
      </b-list-group-item>
    </b-list-group>

    <h3 class="mt-4">List Group Inside Card</h3>
    <b-card no-body header="Card with Flush List Group">
      <b-list-group flush>
        <b-list-group-item href="#" variant="primary">Primary List Group Item</b-list-group-item>
        <b-list-group-item href="#" variant="secondary">Secondary List Group Item</b-list-group-item>
        <b-list-group-item href="#" variant="success">Success List Group Item</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>