<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">Navigation Components</h1>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="Breadcrumb" active>
                <BreadcrumbDemo />
              </b-tab>

              <b-tab title="Pagination">
                <PaginationDemo />
              </b-tab>

              <b-tab title="Nav">
                <NavDemo />
              </b-tab>

              <b-tab title="Dropdown">
                <DropdownDemo />
              </b-tab>

              <b-tab title="Tabs">
                <TabsDemo />
              </b-tab>

              <b-tab title="Link">
                <LinkDemo />
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
import DropdownDemo from "@/components/navigation/DropdownDemo.vue";
import LinkDemo from "@/components/navigation/LinkDemo.vue";
import NavDemo from "@/components/navigation/NavDemo.vue";
import PaginationDemo from "@/components/navigation/PaginationDemo.vue";
import TabsDemo from "@/components/navigation/TabsDemo.vue";

export default {
  components: {
    BreadcrumbDemo,
    DropdownDemo,
    LinkDemo,
    NavDemo,
    PaginationDemo,
    TabsDemo,
  },
};
</script>