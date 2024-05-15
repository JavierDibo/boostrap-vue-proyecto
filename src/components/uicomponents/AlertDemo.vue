<template>
  <div>
    <h2>BootstrapVue Alert Demo</h2>

    <!-- Dismissible Alert with Auto-Dismiss Countdown -->
    <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="warning"
        @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>

    <!-- Alert with Additional Content -->
    <b-alert show variant="success" class="mt-4">
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
      </p>
      <hr>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </b-alert>

    <!-- Control Buttons -->
    <div class="mt-4">
      <b-button @click="showAlert" variant="info" class="mr-2">
        Show alert with count-down timer
      </b-button>
      <b-button @click="showDismissibleAlert = true" variant="info">
        Show dismissible alert
      </b-button>
    </div>
    <!-- Contextual Variants -->
    <div class="mt-4">
      <b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert>
      <b-alert show variant="secondary"><a href="#" class="alert-link">Secondary Alert</a></b-alert>
      <b-alert show variant="success"><a href="#" class="alert-link">Success Alert</a></b-alert>
      <b-alert show variant="danger"><a href="#" class="alert-link">Danger Alert</a></b-alert>
      <b-alert show variant="warning"><a href="#" class="alert-link">Warning Alert</a></b-alert>
      <b-alert show variant="info"><a href="#" class="alert-link">Info Alert</a></b-alert>
      <b-alert show variant="light"><a href="#" class="alert-link">Light Alert</a></b-alert>
      <b-alert show variant="dark"><a href="#" class="alert-link">Dark Alert</a></b-alert>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>