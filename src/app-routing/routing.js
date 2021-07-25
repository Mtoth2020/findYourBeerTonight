import Vue from 'vue'
import VueRouter from 'vue-router'
import beerlistview from '../beer-views/Beerlistview'
import beerdetailsview from '../beer-views/Beerdetailsview'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'beerlistview',
        component: beerlistview,
        props: true
    },
    {
        path: '/beerlistview',
        name: 'beerlistview',
        component: beerlistview,
        props: true
    },
    {
        path: '/beerdetailsview/',
        name: 'Beerdetailsview',
        component: beerdetailsview,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
