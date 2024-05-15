<template>
  <div>
    <b-jumbotron
        bg-variant="info"
        text-variant="white"
        border-variant="dark"
        header-tag="h1"
        header-level="1"
        fluid
    >
      <template #header>Welcome to BootstrapVue!</template>
      <template #lead>
        Discover the power of <strong>Bootstrap v4 Components</strong> for Vue.js 2.
        Quickly build responsive and attractive web interfaces.
      </template>

      <hr class="my-4">

      <p>
        BootstrapVue provides a comprehensive set of components and plugins,
        offering endless possibilities for crafting amazing user experiences.
      </p>

      <b-button variant="primary" size="lg" href="#">Get Started</b-button>
      <b-button variant="light" size="lg" href="#">Learn More</b-button>
    </b-jumbotron>

    <b-jumbotron
        bg-variant="warning"
        text-variant="dark"
        header-tag="h2"
        header-level="2"
        fluid
        container-fluid
    >
      <template #header>Why BootstrapVue?</template>

      <b-list-group>
        <b-list-group-item variant="success">Extensive Component Library</b-list-group-item>
        <b-list-group-item variant="info">Easy to Use and Customize</b-list-group-item>
        <b-list-group-item variant="warning">Responsive and Mobile-Friendly</b-list-group-item>
        <b-list-group-item variant="danger">Great Documentation and Community Support</b-list-group-item>
      </b-list-group>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'JumbotronDemo'
}
</script>