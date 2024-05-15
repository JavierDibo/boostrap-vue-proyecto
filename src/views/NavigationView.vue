<template>
  <div>
    <h1>Navigation Components</h1>
    <BreadcrumbDemo />
    <DropdownDemo />
    <LinkDemo />
  </div>
</template>

<script>
import BreadcrumbDemo from "@/components/BreadcrumbDemo.vue";
import DropdownDemo from "@/components/DropdownDemo.vue";
import LinkDemo from "@/components/LinkDemo.vue";

export default {
  components: {
    BreadcrumbDemo,
    DropdownDemo,
    LinkDemo,
  },
};
</script>