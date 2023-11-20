<script>
export default {
  name: 'Card',
  props: {
    project: Object,
    url: String
  },
  computed: {
    targetUrl() {
      return this.url + 'storage/' + this.project.cover_image
    }
  }
}
</script>

      
<template>
  <div class="card text-center p-0 flex-grow-1  ">
    <h4 class="card-header card-title">{{ project.title }}</h4>
    <img class="card-img-top img-fluid object-fit-cover " :src="targetUrl" :alt="project.title">
    <div class="card-body">
      <p class="card-text">{{ project.content }}</p>
      <p class="card-text">{{ project.website }}</p>
      <p class="card-text">{{ project.github }}</p>
      <p v-if="project.type != null" class="card-text">{{ project.type.name }}</p>
      <p v-for="technology in project.technologies" class="card-text">{{ technology.name }}</p>


    </div>
  </div>
</template>


<style lang="scss" scoped></style>