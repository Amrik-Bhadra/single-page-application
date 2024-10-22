import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

import { createRouter, createWebHistory } from 'vue-router'

import PopulateData from './components/PopulateData.vue';
import CurrencyConverter from './components/CurrencyConverter.vue';
import RegistrationForm from './components/RegistrationForm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CurrencyConverter },
        { path: '/populateData', component: PopulateData },
        { path: '/registration', component: RegistrationForm }
    ],
    linkActiveClass: 'active'
})

createApp(App).use(router).use(bootstrap).mount('#app')
