<!-- Navigation Components -->
<template>
  <div>
    <h1>Navigation Components</h1>
    <BreadcrumbDemo />
    <DropdownDemo />
    <LinkDemo />
    <NavDemo />
    <PaginationDemo />
  </div>
</template>

<script>
import BreadcrumbDemo from "@/components/BreadcrumbDemo.vue";
import DropdownDemo from "@/components/DropdownDemo.vue";
import LinkDemo from "@/components/LinkDemo.vue";
import NavDemo from "@/components/NavDemo.vue";
import PaginationDemo from "@/components/PaginationDemo.vue";

export default {
  components: {
    NavDemo,
    BreadcrumbDemo,
    DropdownDemo,
    LinkDemo,
    PaginationDemo
  },
};
</script>