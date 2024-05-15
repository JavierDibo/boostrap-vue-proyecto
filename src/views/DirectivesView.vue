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

              <b-tab title="Popover" active>
                <PopoverDemo />
              </b-tab>

              <b-tab title="Scrollspy" active>
                <ScrollspyDemo />
              </b-tab>

              <b-tab title="Extra" active>
                <ExtraDemo />
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
import PopoverDemo from "@/components/directives/PopoverDemo.vue";
import ScrollspyDemo from "@/components/directives/ScrollspyDemo.vue";
import ExtraDemo from "@/components/directives/ExtraDemo.vue";

export default {
  components: {
    ScrollspyDemo,
    PopoverDemo,
    HoverDemo,
    ExtraDemo,
  },
};
</script>
