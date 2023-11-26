<script>
import { store } from '../store.js'

export default {
    name: 'AboutView',
    data() {
        return {
            store
        }
    },
    mounted() {
        store.getLatest()
    }
}
</script>

<template>
    <div class="container ">
        <div class="container p-2 py-4">

            <div class="row">
                <div class="col-1 d-flex justify-content-end">
                    <div class="line"></div>
                </div>
                <div class="col-6">
                    <h1 class=" text-start text-light     display-1 ">Welcome.</h1>
                    <p class="text-white">
                        My name is Giacomo And I am studying to become a Full Stack Web Developer. <br>
                        I am really passionate about learning and embracing new challenges. <br>
                        During the last months I've been studying Full-Stack web development with Boolean Careers, where i
                        had the opportunity to learn JavaScript, VueJS, Vite and Laravel. <br>
                    </p>

                </div>
                <h3 class="text-white mt-5 projects">
                    Latest Projects
                </h3>
                <div class="row flex-column   ">


                    <div class="col-10 projects mt-3 d-flex align-items-start     " v-for="project in store.latestProjects">

                        <img class="col-2 card-img-top card_img" src="../assets/img/placeholder.png" alt="Title">
                        <div class="card-body m-0 text-white ">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="">{{ project.content }}</p>
                            <p class="">Code: <a :href="project.github">{{ project.github }}</a></p>
                            <p class="">Website: <a :href="project.website">{{ project.website }}</a></p>
                            <p class="">Type: <span class=" ms-2     rounded-pill badge  text-bg-primary">{{
                                project.type.name
                            }}</span></p>
                            <p class="">Technologies: <span v-for="technology in project.technologies"
                                    class=" ms-2  badge rounded-pill text-bg-success text-uppercase "> {{
                                        technology.name
                                    }}</span>
                            </p>
                        </div>

                    </div>

                </div>
                <div class="d-flex w-100 ">
                    <RouterLink class="projects mt-5 btn btn-outline-primary w-50  " to="/contacts">CONTACT ME
                    </RouterLink>
                    <RouterLink class="projects mt-5 btn btn-outline-primary w-50 " to="/projects">SEE ALL MY PROJECTS
                    </RouterLink>
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.projects {
    margin-left: 5rem;
}



.card_img {
    width: 300px;
    margin-right: 3rem;
}
</style>