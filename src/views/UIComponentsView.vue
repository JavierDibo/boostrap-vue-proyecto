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

              <b-tab title="ButtonGroupDemo">
                <ButtonGroupDemo />
              </b-tab>

              <b-tab title="ButtonToolbarDemo">
                <ButtonToolbarDemo />
              </b-tab>

              <b-tab title="CalendarDemo">
                <CalendarDemo />
              </b-tab>

              <b-tab title="CardDemo">
                <CardDemo />
              </b-tab>

              <b-tab title="CollapseDemo">
                <CollapseDemo />
              </b-tab>

              <b-tab title="ImageDemo">
                <ImageDemo />
              </b-tab>

              <b-tab title="JumpotronDemo">
                <JumpotronDemo />
              </b-tab>

              <b-tab title="EmbedDemo">
                <EmbedDemo />
              </b-tab>

              <b-tab title="ListGroupDemo">
                <ListGroupDemo />
              </b-tab>

              <b-tab title="MediaDemo">
                <MediaDemo />
              </b-tab>

              <b-tab title="ModalDemo">
                <ModalDemo />
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
import ButtonToolbarDemo from "@/components/uicomponents/ButtonToolbarDemo.vue";
import ButtonGroupDemo from "@/components/uicomponents/ButtonGroupDemo.vue";
import CalendarDemo from "@/components/uicomponents/CalendarDemo.vue";
import CardDemo from "@/components/uicomponents/CardDemo.vue";
import CollapseDemo from "@/components/uicomponents/CollapseDemo.vue";
import ImageDemo from "@/components/uicomponents/ImageDemo.vue";
import JumpotronDemo from "@/components/uicomponents/JumpotronDemo.vue";
import EmbedDemo from "@/components/uicomponents/EmbedDemo.vue";
import ListGroupDemo from "@/components/uicomponents/ListGroupDemo.vue";
import MediaDemo from "@/components/uicomponents/MediaDemo.vue";
import ModalDemo from "@/components/uicomponents/ModalDemo.vue";

export default {
  components: {
    ModalDemo,
    MediaDemo,
    ListGroupDemo,
    EmbedDemo,
    ImageDemo,
    CollapseDemo,
    CardDemo,
    ButtonGroupDemo,
    ButtonToolbarDemo,
    AvatarDemo,
    AlertDemo,
    AspectDemo,
    CalendarDemo,
    JumpotronDemo,
  },
};
</script>