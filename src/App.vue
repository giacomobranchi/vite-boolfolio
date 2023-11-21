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
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>


<style lang="scss" scoped>
main {
  background-color: #e0e0e0;
  margin: 0;
}

footer {
  background-color: #3a606e;
}
</style>