<script>

import axios from 'axios';
import { store } from '../store.js';
import AppLoading from '../components/AppLoading.vue';

export default {
    name: 'SinglePet',
    components: {
        AppLoading
    },
    data() {
        return {
            store,
            pet: null
        }
    },
    created() {
        this.getSinglePet();
    },
    methods: {
        getSinglePet() {
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/pets/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.pet = response.data.pet;
                    this.store.loading = false;
                }
                else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    }
}
</script>

<template lang="">
    <div>
        <AppLoading v-if="this.store.loading" />
        <div class="container" v-else>
            <div class="row my-3">
                <div class="card-image-container d-flex justify-content-center w-100">
                    <img :src="`${this.store.baseUrl}/storage/${pet.image}`" class="card-img-top my-img" :alt="'Immagine non disponibile'">
                </div>
                <div class="col-12 text-center mb-4">
                    <h1><strong>Nome:</strong> {{ pet.name }}</h1>
                </div>
                <div class="col-12">
                    <strong>Specie:</strong>{{ pet.species }}
                </div>
                <div class="col-12 my-3">
                    <strong>Data di nascita:</strong>{{ pet.date_born }}
                </div>
                <div class="col-12">
                    <strong>Genere:</strong>{{ pet.genre }}
                </div>
                <div class="col-12 my-3">
                    <strong>Proprietario:</strong>{{ pet.owner }}
                </div>
                <div class="col-12 my-3">
                    <strong>Vaccini:</strong>
                    <div class="container" v-for="vaccination in pet.vaccinations">
                        <span>{{ vaccination.vaccine_name }}</span>
                    </div>
                </div>
                <div class="col-12 my-3">
                    <strong>Malattie:</strong>
                    <div class="container" v-for="illness in pet.illnesses">
                        <span>{{ illness.name }}</span>
                    </div>
                </div>
                <div class="col-12">
                    <strong>Note:</strong>{{ pet.notes }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.card-image-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

}

.my-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
}
</style>