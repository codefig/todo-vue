import VueRouter from 'vue-router';
// import Trash from './components/Trash.vue';
// import News from './components/News.vue';
import Home from './components/Home.vue';
// import NotFoundComponent from './components/NotFoundComponent.vue';

//Lazy loading Technique 

const News  = () => System.import('./components/News.vue')
const Add = () => System.import('./components/Add.vue');
const NotFoundComponent= () => System.import('./components/NotFoundComponent.vue')

let routes = [
	{
		path : '/', 
		component: Home
	},
	{
		path : '/add',
		component : Add
	}, 
	{
		path : '/deleted', 
		component : require('./components/Trash.vue')
	}, 
	{
		path : '/news/:id', 
		component : News
	}, {
		path : '*', 
		component : NotFoundComponent
	}
]

const router = new VueRouter({
	mode : 'history', 
	routes
})
export default router