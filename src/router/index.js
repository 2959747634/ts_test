import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login"

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/hello',
        name: 'main',
        component: Login
    },
];

const index = createRouter({
    history: createWebHistory(),    //去掉＃
    routes,
});
export default index;
