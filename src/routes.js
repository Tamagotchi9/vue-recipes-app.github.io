import Vue from 'vue'
import VueRouter from 'vue-router'
import Recipes from './views/Recipes'
import Recipe from './views/Recipe'
import NotFoundComponent from './views/NotFoundComponent'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: '',
            component: Recipes
        },
        {
            path: '/recipe/:title',
            component: Recipe
        },
        {
            path: '*',
            component: NotFoundComponent
        }
    ],
    // mode: 'history'
})