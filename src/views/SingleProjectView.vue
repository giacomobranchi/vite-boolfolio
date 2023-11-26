<script >
import { store } from '../store';

import axios from 'axios';

export default {
    name: 'SingleProjectView',

    data() {
        return {
            store,
            project: null,
        }

    },

    methods: {


        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

    },
    mounted() {
        axios.get(this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`)
            .then(response => {

                console.log('AXIOS RESPONSE:', response.data.success);

                if (response.data.success) {
                    // console.log('QUERY:', this.store.baseUrl + this.store.portfolioApi + '/' + `${this.$route.params.slug}`);
                    //console.log('SINGLE PROJECT:', response.data.project);
                    this.project = response.data.project;
                } else {
                    //console.log('SINGLE PROJECT QUERY project:', response.data.project);
                    this.$router.push({ name: 'NotFound' })
                }

            }).catch(err => {
                console.error(err);
            })
    },

}

</script>

<template>
    <section :id="project.slug" class=" pt-5" v-if="project">

        <div class="container ">
            <div class="container p-2 py-4">

                <div class="row">
                    <div class="col-1 d-flex justify-content-end">
                        <div class="line"></div>
                    </div>
                    <div class="col-11">
                        <h1 class=" text-start text-light     display-4 ">{{ project.title }}</h1>
                        <p class="text-white display-6 ">
                            {{ project.content }}
                        </p>
                        <img class="col-2 card-img-top card_img my-3 " src="../assets/img/placeholder.png" alt="Title">
                        <p class="text-white">Code: <a :href="project.github">{{ project.github }}</a></p>
                        <p class="text-white">Website: <a :href="project.website">{{ project.website }}</a></p>
                        <p v-if="project.type" class="text-white">Type: <span
                                class=" ms-2     rounded-pill badge  text-bg-primary">{{
                                    project.type.name
                                }}</span></p>
                        <p class="text-white">Technologies: <span v-for="technology in project.technologies"
                                class="text-white ms-2  badge rounded-pill text-bg-success text-uppercase "> {{
                                    technology.name
                                }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card_img {
    width: 300px;
    margin-right: 3rem;
}
</style>