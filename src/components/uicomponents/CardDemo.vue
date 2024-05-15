<template>
  <div>
    <!-- Card with overlay image -->
    <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay Card"
        sub-title="Subtitle"
        class="mb-4"
    >
      <b-card-text>
        This card has an image overlay and white text for better visibility.
      </b-card-text>
    </b-card>

    <!-- Card group with solid background variants -->
    <b-card-group deck class="mb-4">
      <b-card bg-variant="primary" text-variant="white" header="Primary Card" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="success" text-variant="white" header="Success Card" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card bg-variant="info" text-variant="white" header="Info Card" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>

    <!-- Card with header and footer variants -->
    <b-card
        header="Variant Header"
        header-text-variant="white"
        header-bg-variant="dark"
        footer="Variant Footer"
        footer-bg-variant="success"
        footer-border-variant="dark"
        title="Header and Footer Variants"
        class="mb-4"
    >
      <b-card-text>This card has a header and footer with background and text variants.</b-card-text>
    </b-card>

    <!-- Card group with masonry-like columns -->
    <b-card-group columns>
      <b-card title="Column Card 1">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card title="Column Card 2">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</b-card-text>
      </b-card>

      <b-card
          title="Column Card 3"
          img-src="https://picsum.photos/300/200/?image=41"
          img-alt="Image"
          img-top
      >
        <b-card-text>This is a wider card with an image on top and supporting text below.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>