<template>
  <div>
    <h2>Breadcrumb Demo</h2>
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