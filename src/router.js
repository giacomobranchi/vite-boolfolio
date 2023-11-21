import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'


const routes = [
    {
        path: '/',
        name: 'about',
        component: AboutView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProjectView,
    },



];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export { router }