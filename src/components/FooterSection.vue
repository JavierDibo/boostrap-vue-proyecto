<template>
  <b-container fluid class="bg-dark text-light py-3">
    <b-row>
      <b-col class="text-center">
        &copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>