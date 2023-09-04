<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data() {
        return {
            name: "ContactForm",
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false,

        }
    },
    methods: {
        sendForm() {
            this.loading = true

            const data = {
                name: this.name,
                email: this.email,
                content: this.message
            }

            //PULISCO L'ARRAY DEGLI ERRORI
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts/`, data).then((response) => {
                this.success = response.data.success;
                console.log(this.success)
                if (!this.success) {
                    this.errors = response.data.errors;
                }
                else {
                    //PULISCO I DATI IN INPUT
                    this.name = '';
                    this.email = '';
                    this.message = '';

                    this.$router.push({ name: 'thank-you' })
                }
                this.loading = false
            });
        },
    }
}
</script>
<template>
    <div>
        <h1 class="text-center my-3">Contattaci</h1>
        <div class="container">
            <div class="col-12 text-center">
                <lord-icon src="https://cdn.lordicon.com/ganitnqp.json" trigger="loop"
                    colors="primary:#4be1ec,secondary:#cb5eee" style="width:150px;height:150px">
                </lord-icon>
            </div>
            <div class="row">
                <div class="col-12 card p-5 my-3">
                    <form @submit.prevent="sendForm()" class="row">
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Nome e Cognome</label>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Nome e Cognome"
                                class="form-control" :class="errors.name ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="email">Email</label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="email@example.com"
                                class="form-control" :class="errors.email ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Messaggio</label>
                            <textarea name="message" id="message" v-model="message" placeholder="Messagio"
                                class="form-control" :class="errors.content ? 'is-invalid' : ''"></textarea>
                            <p v-for="(error, index) in errors.content" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12  my-3">
                            <div v-if="loading" class="disabled">
                                <lord-icon src="https://cdn.lordicon.com/sdhhsgeg.json" trigger="loop"
                                    colors="primary:#4be1ec,secondary:#cb5eee" style="width:80px;height:80px">
                                </lord-icon>
                            </div>
                            <button v-else class="btn btn-sm btn-success" type="submit">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *;
</style>