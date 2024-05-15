<template>
  <div>
    <h2>{{ loading ? 'Loading...' : 'BootstrapVue Skeleton Demo' }}</h2>

    <b-skeleton-wrapper :loading="loading" class="mb-3">
      <template #loading>
        <b-card>
          <b-skeleton width="85%" animation="fade"></b-skeleton>
          <b-skeleton width="55%" animation="fade"></b-skeleton>
          <b-skeleton width="70%" animation="fade"></b-skeleton>
        </b-card>
      </template>

      <b-card>
        <b-card-title>About BootstrapVue Skeleton</b-card-title>
        <b-card-text>
          BootstrapVue Skeleton is a component that allows you to display loading states
          for various components while data is being fetched or computed. It provides
          an easy way to create placeholder content that feels native to your app.
        </b-card-text>
      </b-card>
    </b-skeleton-wrapper>

    <b-row>
      <b-col md="6">
        <b-card no-body>
          <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>

          <b-card-body>
            <b-skeleton width="35%" style="margin-bottom: 15px"></b-skeleton>
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="75%"></b-skeleton>
          </b-card-body>

          <b-card-footer>
            <b-skeleton type="button" width="20%" style="margin-right: 10px"></b-skeleton>
            <b-skeleton type="button" width="30%"></b-skeleton>
          </b-card-footer>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-skeleton-table
            :rows="5"
            :columns="4"
            :table-props="{ bordered: true, striped: true }"
        ></b-skeleton-table>

        <b-skeleton-img no-aspect height="150px" class="mt-3"></b-skeleton-img>
      </b-col>
    </b-row>

    <div class="text-center mt-3">
      <b-skeleton-icon
          icon="gear-fill"
          :icon-props="{ fontScale: 4, animation: 'cylon' }"
      ></b-skeleton-icon>
    </div>

    <b-button variant="primary" class="mt-3" @click="loading = !loading">
      {{ loading ? 'Stop Loading' : 'Start Loading' }}
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>