
<script>

export default {

}
</script>

<template>
    <div class="navigation">
        <h1 class="text-center">PORTFOLIO</h1>
        <nav class="nav justify-content-center ">
            <router-link class="nav-link" to="/">About Me</router-link>
            <router-link class="nav-link" to="/projects">Projects</router-link>
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
        </nav>
    </div>
</template>

<style lang="scss">
.navigation,
nav {
    background-color: #3a606e;
    color: white;
    text-decoration: none;
}
</style>