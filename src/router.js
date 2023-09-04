import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import AskUs from './pages/AskUs.vue';
import NotFound from './pages/NotFound.vue';
import PetsList from './pages/PetsList.vue';
import PetSingle from './pages/SinglePet.vue';
import ThankYouPage from './pages/ThankYou.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/pets-list',
            name: 'pets_list',
            component: PetsList
        },
        {
            path: '/single-pet/:slug',
            name: 'single-pet',
            component: PetSingle
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs
        },
        {
            path: '/ask-us',
            name: 'ask_us',
            component: AskUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYouPage 
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata'
        }
    ]
});

export { router };