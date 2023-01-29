import Vue from "vue";
import App from './App.vue';
import router from './router';

require('./bootstrap');

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.component('app-loader', require('./components/AppLoader.vue').default);
Vue.component('error-notification', require('./components/ErrorNotification.vue').default);


new Vue({
    el: '#app',
    components: {
        App
    },
    router
});