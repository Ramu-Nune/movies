import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Movies from '../views/Movies.vue'
import Favourites from '../views/Favourites.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{ path: '/', name: 'Movies', component: Movies },
	{ path: '/favourites', name: 'Favourites', component: Favourites }
]

const router = new VueRouter({routes})

export default router
