<template>
  <div>
    <!-- Accordion -->
    <div class="accordion mb-5" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text>Some example accordion text.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>Some more example accordion text.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <!-- Multiple Trigger Buttons -->
    <b-button v-b-toggle.collapse-a.collapse-b class="mb-1 mr-1">Toggle Collapse A and B</b-button>
    <b-button v-b-toggle="'collapse-a collapse-b'" class="mb-1">Toggle Collapse A and B</b-button>

    <b-collapse id="collapse-a" class="mt-2">
      <b-card>
        <b-card-text>I am collapsible content A! I can be toggled with multiple buttons.</b-card-text>
      </b-card>
    </b-collapse>

    <b-collapse id="collapse-b" class="mt-2">
      <b-card>
        <b-card-text>I am collapsible content B! I can also be toggled with multiple buttons.</b-card-text>
      </b-card>
    </b-collapse>

    <!-- V-Model Example -->
    <b-button
        class="mt-3 mr-1"
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
    >
      Toggle Collapse
    </b-button>

    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
        <b-card-text>I am controlled with v-model!</b-card-text>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>