<script>
import ProjectCard from '../components/ProjectCard.vue';
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



        <div class="container">
            <div class="container p-2 py-4">

                <div class="row">
                    <div class="col-1 d-flex justify-content-end">
                        <div class="line"></div>
                    </div>
                    <div class="col-6">
                        <h1 class=" text-start text-light     display-1 ">Projects.</h1>
                        <p class="text-white">
                            Here's the list of all My Projects <br>

                        </p>
                    </div>
                </div>
                <div class=" projects row flex-row row-cols-1 row-cols-md-2 g-3  row-cols-lg-3 ">

                    <ProjectCard :project="project" :url="store.baseUrl" v-for="project in store.projects" />

                </div>
            </div>
        </div>





    </section>
</template>

<style lang="scss" scoped>
.projects {
    margin-top: 3rem;
    padding: 3rem;
}
</style>