
<script>

export default {

}
</script>

<template>
    <div class="navigation">
        <nav class="nav nav-pills nav-fill bg-dark  justify-content-center pt-3">
            <router-link class="nav-link" to="/">About Me</router-link>
            <router-link class="nav-link" to="/projects">Projects</router-link>
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
        </nav>
    </div>
</template>

<style lang="scss">
.navigation,
nav {
    color: white;
    text-decoration: none;
}

.navigation {
    background-color: #212529;
}
</style>