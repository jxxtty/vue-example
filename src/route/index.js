import Vue from 'vue';
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";
import PageView from "@/views/PageView";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'page',
            path: '/page',
            component: PageView
        }
    ]

});
