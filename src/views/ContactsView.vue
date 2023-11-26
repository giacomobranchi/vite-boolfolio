<script>
import axios from 'axios'

import { store } from '../store.js';

export default {
    name: 'ContactsView',

    data() {
        return {
            store,

            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null,

        }
    },
    methods: {

        sendForm() {

            this.loading = true;

            // SVUOTA ERRORI E RISULTATI
            this.errors = [];

            this.success = null;

            // ASSEGNA A PAYLOAD I DATI DEL FORM
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            };
            console.log('PAYLOAD:', payload);

            console.log('url:', this.store.baseUrl + 'api/lead');

            axios.post(this.store.baseUrl + 'api/lead/', payload)
                .then(response => {

                    console.log('RESPONSE:', response);

                    // ASSEGNA A SUCCESS IL VALORE DI data.success. SE CI SONO callWithErrorHandling, QUESTA SARA' UNDEFINED ED ENTRERA' NELL'IF
                    const success = response.data.success;

                    if (!success) {

                        console.log('Errors:', response.data.errors);
                        // ASSEGNA A this.errors IL VALORE DELLA RESPONSE errors IN MODO DA POTERLI USARE IN PAGINA
                        this.errors = response.data.errors;

                    } else {

                        console.log('VALIDATION PASSED:', response);

                        // SVUOTA I CAMPI
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.phone = '';

                        this.success = response.data.message;

                    }

                    this.loading = false;

                })
                .catch(err => {
                    console.error(err);
                })

        }

    }
}

</script>

<template>
    <section id="contacts" class="vh-100 pt-5">
        <div class="container ">
            <div class="container p-2 py-4">

                <div class="row">
                    <div class="col-1 d-flex justify-content-end">
                        <div class="line"></div>
                    </div>
                    <div class="col-6">
                        <h1 class=" text-start text-light     display-1 ">Contact Me</h1>

                    </div>
                </div>
            </div>
        </div>
        <div class="container h-100 d-flex flex-column">

            <form action="" v-on:submit.prevent="sendForm()">

                <div class="mb-2">
                    <label for="name" class="form-label"> <strong>Name:</strong></label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name"
                        aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">

                    <small id="nameHelper" class="text-light">Type Your Name</small>

                    <small v-if="errors.name" v-for="message in errors.name" id="nameHelper" class="text-danger d-block"> {{
                        message }}</small>
                </div>

                <div class="mb-2">
                    <label for="email" class="form-label"><strong>Email:</strong></label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                        placeholder="mail@example.com" v-model="email" :class="{ 'is-invalid': errors.email }">

                    <small id="emailHelpId" class="form-text text-light">Enter you Email address</small>

                    <small v-if="errors.email" v-for="message in errors.email" id="nameHelper" class="text-danger d-block">
                        {{ message }}</small>

                </div>

                <div class="mb-2">
                    <label for="phone" class="form-label"><strong>Phone Number:</strong></label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="1234567890"
                        aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">

                    <small id="phoneHelper" class="text-light">Enter your Phone Number</small>

                    <small v-if="errors.phone" v-for="message in errors.phone" id="nameHelper" class="text-danger d-block">
                        {{ message }}</small>

                </div>

                <div class="mb-2">
                    <label for="message" class="form-label"><strong>Message:</strong></label>
                    <textarea class="form-control" name="message" id="message" rows="3" aria-describedby="messageHelpId"
                        v-model="message" :class="{ 'is-invalid': errors.message }"></textarea>

                    <small id="messageHelpId" class="form-text text-light">Write your Message</small>

                    <small v-if="errors.message" v-for="message in errors.message" id="nameHelper"
                        class="text-danger d-block"> {{ message }}</small>

                </div>

                <button class="btn btn-outline-primary  w-25" type="submit" :disabled="loading">

                    <span v-if="loading">Sending</span>

                    <span v-else>Send</span>

                </button> <span v-if="success" class="text-success text-capitalize mx-3"> {{ success
                }}</span>

            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>