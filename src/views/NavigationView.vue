<!-- Navigation Components -->
<template>
  <div>
    <h1>Navigation Components</h1>
    <BreadcrumbDemo />
    <DropdownDemo />
    <LinkDemo />
    <NavDemo />
    <PaginationDemo />
    <TabsDemo />
  </div>
</template>

<script>
import BreadcrumbDemo from "@/components/BreadcrumbDemo.vue";
import DropdownDemo from "@/components/DropdownDemo.vue";
import LinkDemo from "@/components/LinkDemo.vue";
import NavDemo from "@/components/NavDemo.vue";
import PaginationDemo from "@/components/PaginationDemo.vue";
import TabsDemo from "@/components/TabsDemo.vue";

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