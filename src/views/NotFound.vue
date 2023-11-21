<script >
import { store } from '../store';


export default {
    name: 'NotFound',

    data() {
        return {
            store,
        }

    },

    methods: {

        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

    },

}

</script>

<template>
    <section id="404" class="vh-100 pt-5">
        <div class="container h-100 text-center text-dark">

            <h2>This Page doesn't exist (yet)</h2>


        </div>
    </section>
</template>

<style lang="scss" scoped></style>