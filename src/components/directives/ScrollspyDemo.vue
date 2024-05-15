<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-card>
          <b-nav pills vertical v-b-scrollspy:scroll-target>
            <b-nav-item href="#section-1">Sección 1</b-nav-item>
            <b-nav-item href="#section-2">Sección 2</b-nav-item>
            <b-nav-item href="#section-3">Sección 3</b-nav-item>
            <b-nav-item href="#section-4">Sección 4</b-nav-item>
            <b-nav-item href="#section-5">Sección 5</b-nav-item>
          </b-nav>
        </b-card>
      </b-col>
      <b-col cols="8">
        <b-card id="scroll-target" style="position:relative; height:400px; overflow-y:auto;">
          <b-card-body>
            <h4 id="section-1">Sección 1</h4>
            <p>{{ text }}</p>
            <h4 id="section-2">Sección 2</h4>
            <p>{{ text }}</p>
            <h4 id="section-3">Sección 3</h4>
            <p>{{ text }}</p>
            <h4 id="section-4">Sección 4</h4>
            <p>{{ text }}</p>
            <h4 id="section-5">Sección 5</h4>
            <p>{{ text }}</p>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    }
  }
}
</script>

<style scoped>
#scroll-target {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
</style>
