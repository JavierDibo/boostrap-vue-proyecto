<!-- BreadcrumbDemo.vue -->
<template>
  <div class="mb-4">
    <h2>Breadcrumb</h2>
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Menu',
          href: '#layout-grid'
        },
        {
          text: 'Ajustes',
          href: '#sidebar'
        },
        {
          text: 'Ajustes de cuenta',
          active: true
        }
      ]
    }
  }
}
</script>
