<script>
import { store } from './store.js'
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    };
  },

  components: { NavBar, AppFooter }
}
</script>
    
<template>
  <header>
    <NavBar />
  </header>
  <main class="bg-dark">
    <RouterView></RouterView>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>


<style lang="scss" scoped>
main {

  margin: 0;
}

footer {
  background-color: #212529;

}
</style>