<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    route_name: 'homepage'
                },
                {
                    label: 'I nostri animali',
                    route_name: 'pets_list'
                },
                {
                    label: 'Chi siamo',
                    route_name: 'about_us'
                },
                {
                    label: 'Contatti',
                    route_name: 'ask_us'
                },
            ],
        }
    },
}
</script>
<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                        <div class="container-fluid mx-5 my-2 image">
                            <img src="../assets/pet-logo.png" alt="pet-logo">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                                        <router-link class="nav-link" :to="{ name: item.route_name }">
                                            {{ item.label }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>
