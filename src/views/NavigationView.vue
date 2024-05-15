<!-- NavigationView.vue -->
<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">Componentes de Navegación</h1>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="Breadcrumb (Miga de pan)" active>
                <BreadcrumbDemo />
              </b-tab>

              <b-tab title="Paginación">
                <PaginationDemo />
              </b-tab>

              <b-tab title="Navegación">
                <NavDemo />
              </b-tab>

              <b-tab title="Extra">
                <CombinedDemo />
              </b-tab>

            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BreadcrumbDemo from "@/components/navigation/BreadcrumbDemo.vue";
import NavDemo from "@/components/navigation/NavDemo.vue";
import PaginationDemo from "@/components/navigation/PaginationDemo.vue";
import CombinedDemo from "@/components/navigation/CombinedDemo.vue";

export default {
  components: {
    CombinedDemo,
    BreadcrumbDemo,
    NavDemo,
    PaginationDemo,
  },
};
</script>
