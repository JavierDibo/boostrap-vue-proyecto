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

              <b-tab title="JumpotronDemo">
                <JumpotronDemo />
              </b-tab>

              <b-tab title="ListGroupDemo">
                <ListGroupDemo />
              </b-tab>

              <b-tab title="ModalDemo">
                <ModalDemo />
              </b-tab>

              <b-tab title="OverlayDemo">
                <OverlayDemo />
              </b-tab>

              <b-tab title="PopoverDemo">
                <PopoverDemo />
              </b-tab>

              <b-tab title="ProgressDemo">
                <ProgressDemo />
              </b-tab>

              <b-tab title="SpinnerDemo">
                <SpinnerDemo />
              </b-tab>

              <b-tab title="SkeletonDemo">
                <SkeletonDemo />
              </b-tab>

              <b-tab title="TableDemo">
                <TableDemo />
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
import ButtonToolbarDemo from "@/components/uicomponents/ButtonToolbarDemo.vue";
import ButtonGroupDemo from "@/components/uicomponents/ButtonGroupDemo.vue";
import CalendarDemo from "@/components/uicomponents/CalendarDemo.vue";
import CardDemo from "@/components/uicomponents/CardDemo.vue";
import CollapseDemo from "@/components/uicomponents/CollapseDemo.vue";
import JumpotronDemo from "@/components/uicomponents/JumbotronDemo.vue";
import ListGroupDemo from "@/components/uicomponents/ListGroupDemo.vue";
import ModalDemo from "@/components/uicomponents/ModalDemo.vue";
import OverlayDemo from "@/components/uicomponents/OverlayDemo.vue";
import PopoverDemo from "@/components/uicomponents/PopoverDemo.vue";
import ProgressDemo from "@/components/uicomponents/ProgressDemo.vue";
import SpinnerDemo from "@/components/uicomponents/SpinnerDemo.vue";
import SkeletonDemo from "@/components/uicomponents/SkeletonDemo.vue";
import TableDemo from "@/components/uicomponents/TableDemo.vue";

export default {
  components: {
    SkeletonDemo,
    SpinnerDemo,
    ProgressDemo,
    PopoverDemo,
    ModalDemo,
    ListGroupDemo,
    CollapseDemo,
    CardDemo,
    ButtonGroupDemo,
    ButtonToolbarDemo,
    AlertDemo,
    AspectDemo,
    CalendarDemo,
    JumpotronDemo,
    OverlayDemo,
    TableDemo,
  },
};
</script>