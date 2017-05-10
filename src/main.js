import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';

Vue.use(VueRouter);


// TODO: init stripe
const router = new VueRouter({
    routes,
    mode: 'history',
});

const config = {
    template: '<App/>',
    router,
    components: {
        App,
    },
};

new Vue(config).$mount('#app');
