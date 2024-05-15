<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">UI Components</h1>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="AlertDemo" active>
                <AlertDemo />
              </b-tab>

              <b-tab title="AspectDemo">
                <AspectDemo />
              </b-tab>

              <b-tab title="AvatarDemo">
                <AvatarDemo />
              </b-tab>

            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>


import AlertDemo from "@/components/uicomponents/AlertDemo.vue";
import AspectDemo from "@/components/uicomponents/AspectDemo.vue";
import AvatarDemo from "@/components/uicomponents/AvatarDemo.vue";

export default {
  components: {
    AvatarDemo,
    AlertDemo,
    AspectDemo,
  },
};
</script>