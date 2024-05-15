<!-- Navigation Components -->
<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Navigation Components</h1>
    <div class="row">
      <div class="col-md-6">
        <BreadcrumbDemo />
        <PaginationDemo />
      </div>
      <div class="col-md-6">
        <NavDemo />
        <DropdownDemo />
        <TabsDemo />
        <LinkDemo />
      </div>
    </div>
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
    TabsDemo,
    NavDemo,
    BreadcrumbDemo,
    DropdownDemo,
    LinkDemo,
    PaginationDemo
  },
};
</script>