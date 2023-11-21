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
    <section :id="project.slug" class="vh-100 pt-5" v-if="project">
        <div class="px-2">
            <div class="card text-center p-0 flex-grow-1  ">
                <h4 class="card-header card-title">{{ project.title }}</h4>
                <img class="card-img-top img-fluid object-fit-cover " :src="targetUrl" :alt="project.title">
                <div class="card-body">
                    <p class="card-text">{{ project.content }}</p>
                    <p class="card-text" :href="project.website">{{ project.website }}</p>
                    <p class="card-text" :href=project.github>{{ project.github }}</p>
                    <p v-if="project.type != null" class="card-text">{{ project.type.name }}</p>
                    <p v-for="technology in project.technologies" class="card-text">{{ technology.name }}</p>
                    <router-link class="btn btn-primary" to="/projects/:slug">Button</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>