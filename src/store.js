import { reactive } from 'vue';

import axios from 'axios';

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000/',
    portfolioApi: 'api/projects',
    portfolioLatest: '/latest',
    // protfolioSingle: '/' + `${this.$route.param.slug}`,
    projects: null,
    project: null,
    types: null,
    queryData: null,
    queryLinks: null,
    latestProjects: null,




    getProjects() {
        axios.get(this.baseUrl + this.portfolioApi,
            {
                params: {
                    page: this.currentPage
                }
            })

            .then(response => {
                console.log(response);
                this.projects = response.data.projects.data;
                this.queryData = response.data.projects;
                this.queryLinks = response.data.projects.links;
            }).catch(err => {
                console.error(err);
            })
    },

    getTypes() {
        axios.get(this.baseUrl + 'api/types')
            .then(response => {
                console.log('TYPES:', response);
                this.types = response.data.result.data;
                // this.queryData = response.data.result;
                // this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
    },

    navigate(url) {
        axios.get(url)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data;
                this.queryData = response.data.result;
                this.queryLinks = response.data.result.links;
            }).catch(err => {
                console.error(err);
            })
        this.currentPage = this.queryData.current_page;
    },

    getLatest() {
        axios.get(this.baseUrl + this.portfolioApi + this.portfolioLatest)
            .then(response => {
                this.latestProjects = response.data.result;
                console.log('LATEST PROJECTS:', this.latestProjects);
            }).catch(err => {
                console.error(err);
            })
    },
})