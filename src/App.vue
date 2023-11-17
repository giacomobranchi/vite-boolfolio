<script>
import Card from './components/Card.vue';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      baseurl: 'http://127.0.0.1:8000/',
      portfolioApi: 'api/projects',
      projects: [],
    };
  },
  methods: {

  },
  mounted() {
    axios.get(this.baseurl + this.portfolioApi)
      .then(response => {
        console.log(response);
        this.projects = response.data.result.data
      }).catch(err => {
        console.error(err);
      })
  },
  components: { Card }
}
</script>
    
<template>
  <div>
    <div class="container">
      <div class="row flex-row row-cols-1 row-cols-md-4 gap-5 my-3   justify-content-around   ">
        <Card :project="project" :url="baseurl" v-for="project in projects"></Card>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>