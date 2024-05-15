<!-- TabsDemo.vue -->
<template>
  <div>
    <h2 class="mb-3">Tabs</h2>

    <b-card no-body class="mb-4">
      <b-tabs card>
        <b-tab title="Basic" active>
          <b-card-text>This is the basic tab content.</b-card-text>
        </b-tab>
        <b-tab title="Pills">
          <b-card-text>This tab uses the pills style.</b-card-text>
        </b-tab>
        <b-tab title="Disabled" disabled>
          <b-card-text>This tab is disabled.</b-card-text>
        </b-tab>
        <b-tab title="Lazy">
          <b-card-text>This tab is loaded lazily.</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>

    <div>
      <h5>Vertical Tabs</h5>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Tab 1" active>
            <b-card-text>Tab content 1</b-card-text>
          </b-tab>
          <b-tab title="Tab 2">
            <b-card-text>Tab content 2</b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Tab content 3</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>