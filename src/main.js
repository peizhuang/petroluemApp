import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import  VueRouter from 'vue-router'
import  RouterConfig from './router_config'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.credentials = true;
// Vue.http.options.xhr = {withCredentials: true};

Vue.use(VueRouter);

var router = new VueRouter();
RouterConfig(router);
router.start(App, "body");

/*
 new Vue({
 el: 'body',
 components: {App}
 })
 */
