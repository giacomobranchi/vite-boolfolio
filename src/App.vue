<script>
import { store } from './store.js'
import ProjectCard from './components/ProjectCard.vue';
import NavBar from './components/NavBar.vue';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store
    };
  },

  components: { ProjectCard, NavBar }
}
</script>
    
<template>
  <NavBar></NavBar>
  <main>
    <router-view></router-view>
  </main>
  <div class="container">
    <div class="row flex-row row-cols-1 row-cols-md-4 gap-5 my-3   justify-content-around   ">
      <ProjectCard :project="project" :url="baseurl" v-for="project in projects"></ProjectCard>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>