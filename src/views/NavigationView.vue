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