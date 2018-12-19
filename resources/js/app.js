import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';

//doing components imports

import Add from './components/Add.vue';
import Home from './components/Home.vue';
import store from './event-bus.js';

Vue.use(VueRouter);


const app = new Vue({
	el : '#app', 
	data : {
		name  : "Moshood "
	},
	router,
	components : {
		'Add' : Add,
		'Home' : Home,
	},
	store
})