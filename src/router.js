import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routers = [{
    path: "/",
    meta: {
        title: "高等教育出版社有限公司"
    },
    component: resolve => require(["./views/index.vue"], resolve)
}];

const RouterConfig = {
    mode: "hash",
    routes: routers
};

export default new Router(RouterConfig);