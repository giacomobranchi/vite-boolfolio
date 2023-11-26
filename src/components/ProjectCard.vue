<script>
import { router } from '../router';

export default {
  name: 'ProjectCard',
  props: {
    project: Object,
    url: String
  },
  computed: {
    targetUrl() {
      return this.url + 'storage/' + this.project.cover_image;
    }
  },

}
</script>

      
<template>
  <div class="px-2 d-flex">
    <div class="card text-white  p-0 flex-grow-1 ">
      <h4 class=" text-center fw-light       text-capitalize   card-title">{{ project.title }}</h4>
      <h5 class=" text-center fw-light  text-capitalize  card-text">{{ project.content }}</h5>
      <img class=" img-fluid object-fit-cover " src="../assets/img/placeholder.png" :alt="project.title">
      <div class="card-body  ">
        <p class=" text-capitalize  card-text"><a :href="project.website">Website: {{ project.website }}</a></p>
        <p class=" text-capitalize  card-text"><a :href=project.github>Code: {{ project.github }}</a></p>
        <p v-if="project.type != null" class=" text-capitalize  card-text">Type: <span
            class=" badge text-bg-primary rounded-pill ">{{
              project.type.name }}</span></p>
        <p v-else>
          No Type Assigned
        </p>
        <p class=" text-capitalize  card-text">Techs: <span v-for="technology in project.technologies"
            class="badge text-bg-success rounded-pill me-1 ">{{ technology.name
            }}</span></p>

        <router-link class=" btn btn-primary " :to="'/project/' + project.slug">See Details</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card {
  background-color: transparent;
  border: 1px solid grey !important;
}
</style>