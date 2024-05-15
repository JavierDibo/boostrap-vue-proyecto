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
          text: 'Layout Grid',
          href: '#layout-grid'
        },
        {
          text: 'Sidebar',
          href: '#sidebar'
        },
        {
          text: 'Breadcrumb',
          active: true
        }
      ]
    }
  }
}
</script>