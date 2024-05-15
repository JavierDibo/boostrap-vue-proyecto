<!-- NavigationView.vue -->
<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">Directivas de interacción</h1>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="Hover" active>
                <HoverDemo />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HoverDemo from '@/components/directives/HoverDemo.vue';

export default {
  components: {
    HoverDemo,
  },
};
</script>
