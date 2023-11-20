import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'


const routes = [
    { path: '/', component: AboutView },
    { path: '/projects', component: ProjectsView }
];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export { router }