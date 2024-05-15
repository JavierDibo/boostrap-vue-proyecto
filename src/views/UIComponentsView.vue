<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">Componentes UI</h1>

          <b-card no-body>
            <b-tabs card>
              <b-tab title="Alertas" active>
                <AlertDemo />
              </b-tab>

              <b-tab title="Aspecto">
                <AspectDemo />
              </b-tab>

              <b-tab title="Grupo de Botones">
                <ButtonGroupDemo />
              </b-tab>

              <b-tab title="Barra de Herramientas de Botones">
                <ButtonToolbarDemo />
              </b-tab>

              <b-tab title="Calendario">
                <CalendarDemo />
              </b-tab>

              <b-tab title="Tarjetas">
                <CardDemo />
              </b-tab>

              <b-tab title="Colapsar">
                <CollapseDemo />
              </b-tab>

              <b-tab title="Jumbotron">
                <JumpotronDemo />
              </b-tab>

              <b-tab title="Lista de Grupo">
                <ListGroupDemo />
              </b-tab>

              <b-tab title="Modal">
                <ModalDemo />
              </b-tab>

              <b-tab title="Superposición">
                <OverlayDemo />
              </b-tab>

              <b-tab title="Progreso">
                <ProgressDemo />
              </b-tab>

              <b-tab title="Spinner">
                <SpinnerDemo />
              </b-tab>

              <b-tab title="Skeleton">
                <SkeletonDemo />
              </b-tab>

              <b-tab title="Tabla">
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
import ProgressDemo from "@/components/uicomponents/ProgressDemo.vue";
import SpinnerDemo from "@/components/uicomponents/SpinnerDemo.vue";
import SkeletonDemo from "@/components/uicomponents/SkeletonDemo.vue";
import TableDemo from "@/components/uicomponents/TableDemo.vue";

export default {
  components: {
    SkeletonDemo,
    SpinnerDemo,
    ProgressDemo,
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
