import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutView from '@/views/LayoutView.vue';
import NavigationView from '@/views/NavigationView.vue';
import FormsView from "@/views/FormsView.vue";
import UIComponentsView from "@/views/UIComponentsView.vue";
import DirectivesView from "@/views/DirectivesView.vue";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/app/home',
    },
    {
        path: '/app/layout',
        component: LayoutView,
    },
    {
        path: '/app/navigation',
        component: NavigationView,
    },
    {
        path: '/app/forms',
        component: FormsView,
    },
    {
        path: '/app/uicomponents',
        component: UIComponentsView,
    },
    {
        path: '/app/directives',
        component: DirectivesView,
    },
    {
        path: '*',
        component: HomeView,
    }

];

export default new VueRouter({
    mode: 'history',
    routes,
});