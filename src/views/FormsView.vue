<!-- FormsView.vue -->
<template>
  <div>
    <b-container class="my-5">
      <b-row class="justify-content-center">
        <b-col cols="12" md="10">
          <h1 class="text-center mb-5">Componentes de Formularios</h1>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Formulario Básico" active>
                <FormDemo />
              </b-tab>

              <b-tab title="Selector de Fecha">
                <FormDateDemo />
              </b-tab>

              <b-tab title="Grupos de Formularios">
                <FormGroupDemo />
              </b-tab>

              <b-tab title="Entradas">
                <FormInputDemo />
              </b-tab>

              <b-tab title="Radios">
                <FormRadioDemo />
              </b-tab>

              <b-tab title="Calificación">
                <FormRatingDemo />
              </b-tab>

              <b-tab title="Seleccionar">
                <FormSelectDemo />
              </b-tab>

              <b-tab title="Spinbutton">
                <FormSpinbuttonDemo />
              </b-tab>

              <b-tab title="Área de Texto">
                <FormTextAreaDemo />
              </b-tab>

              <b-tab title="Selector de Hora">
                <FormTimePicker />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FormDemo from "@/components/form/FormDemo.vue";
import FormDateDemo from "@/components/form/FormDateDemo.vue";
import FormGroupDemo from "@/components/form/FormGroupDemo.vue";
import FormInputDemo from "@/components/form/FormInputDemo.vue";
import FormRadioDemo from "@/components/form/FormRadioDemo.vue";
import FormRatingDemo from "@/components/form/FormRatingDemo.vue";
import FormSelectDemo from "@/components/form/FormSelectDemo.vue";
import FormSpinbuttonDemo from "@/components/form/FormSpinbuttonDemo.vue";
import FormTextAreaDemo from "@/components/form/FormTextAreaDemo.vue";
import FormTimePicker from "@/components/form/FormTimePicker.vue";

export default {
  components: {
    FormDemo,
    FormDateDemo,
    FormGroupDemo,
    FormInputDemo,
    FormRadioDemo,
    FormRatingDemo,
    FormSelectDemo,
    FormSpinbuttonDemo,
    FormTextAreaDemo,
    FormTimePicker,
  },
};
</script>
