<!-- GridLayout.vue -->
<template>
  <div>
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" lg="4" class="mb-4">
          <b-card class="h-100">
            <b-card-title class="text-center">Card 1</b-card-title>
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" lg="4" class="mb-4">
        <b-card class="h-100">
          <b-card-title class="text-center">Card 2</b-card-title>
          <b-card-text>
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.
          </b-card-text>
        </b-card>
      </b-col>

        <b-col cols="12" md="6" lg="4" class="mb-4">
          <b-card class="h-100">
            <b-card-title class="text-center">Card 3</b-card-title>
            <b-card-text>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col cols="12" md="8">
          <h4 class="text-center mb-4">Main Content</h4>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </b-col>

        <b-col cols="12" md="4">
          <h4 class="text-center mb-4">Sidebar</h4>
          <b-list-group>
            <b-list-group-item>Item 1</b-list-group-item>
            <b-list-group-item>Item 2</b-list-group-item>
            <b-list-group-item>Item 3</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
