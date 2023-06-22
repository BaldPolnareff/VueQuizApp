import { createRouter, createWebHistory } from 'vue-router'
import QuestionsView from '../views/QuestionsView.vue'
import QuizesView from '../views/QuizesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
                {
                    path: '/',
                    name: 'QuizesView',
                    component: QuizesView
                }, 
                {
                    path: '/home',
                    redirect: '/'
                }, 
                {
                    path: '/quiz/:id',
                    name: 'QuestionsView',
                    component: QuestionsView
                }, 
                {
                    path: '/:pathMatch(.*)*',
                    name: 'NotFoundView',
                    component: NotFoundView
                }
        ]
});

export default router;