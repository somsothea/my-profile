import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import Service from '@/pages/Service.vue'
import Portfolio from '@/pages/Portfolio.vue'
import eBooks from '@/pages/eBooks.vue'
import Testimony   from '@/pages/Testimony.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Notfound from '@/pages/Notfound.vue'
import i18n from '@/i18n.js'
import 'aos/dist/aos.css'

const routes = [
    {path: '/', component: Home},
    {path: '/service', component: Service},
    {path: '/portfolio', component: Portfolio},
    {path: '/eBook', component: eBooks},
    {path: '/testimony', component: Testimony},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/:pathMatch(.*)*', component: Notfound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
