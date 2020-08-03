import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main'
import Services from '../pages/Services'
import Contato from '../pages/Contato'
import Info from '../pages/Info'

import Poli from '../pages/servicosinfo/Polimento'
import Marte from '../pages/servicosinfo/Martelinho'
import Pintu from '../pages/servicosinfo/Pintura'
import Reto from '../pages/servicosinfo/Retoques'

Vue.use(VueRouter)

const routes = [{
    name: 'Main',
    path: '/',
    component: Main
}, {
    name: 'Services',
    path: '/services',
    component: Services
}, {
    name: 'Contato',
    path: '/contacts',
    component: Contato
}, {
    name: 'Info',
    path: '/info',
    component: Info
}, {
    name: 'Poli',
    path: '/polimentos',
    component: Poli
}, {
    name: 'Marte',
    path: '/martelinho',
    component: Marte
}, {
    name: 'Pintu',
    path: '/pinturas',
    component: Pintu
}, {
    name: 'Reto',
    path: '/retoques',
    component: Reto
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router