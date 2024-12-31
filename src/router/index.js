import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';



const my_routes = [
	{
		component: HomeView,
		name: 'HomeView',
		path: '/', 
	},
	{
		component: AboutView,
		name: 'AboutView',
		path: '/about'
	}
]



const router = createRouter({
	history: createWebHistory(),
	routes: my_routes
})




export default router;