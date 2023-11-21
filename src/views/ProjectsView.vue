<script>
import ProjectCard from '../components/ProjectCard.vue'
import { store } from '../store';
export default {
    name: "ProjectsView",
    /* mounted() {
        axios.get(this.baseurl + this.portfolioApi)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data
            }).catch(err => {
                console.error(err);
            })
    }, */
    data() {
        return {
            store
        }
    },
    components: {
        ProjectCard,

    },
    mounted() {
        console.log(this.store.getProjects());
        this.store.getProjects()
    }

}
</script>
        
<template>
    <section id="projects" class="pt-5">

        <div class="container py-2 ">

            <h1 class="text-center my-3">Projects</h1>



            <div class="row flex-row row-cols-1 row-cols-md-2 g-3  row-cols-lg-3 ">

                <ProjectCard :project="project" :url="store.baseUrl" v-for="project in store.projects" />

            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped></style>