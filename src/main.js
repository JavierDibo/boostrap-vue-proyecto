// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router' // Add this line to import the router
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router, // Add this line to register the router with the Vue instance
    render: h => h(App),
}).$mount('#app')