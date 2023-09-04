<script>
export default {
    name: 'AboutUs'
}
</script>
<template >
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <h1 class="text-center">Chi siamo ?</h1>
                <p class="my-4 text-center">
                    <strong>PetDesk.it </strong>è un portale dedicato a chi ama gli animali, ne possiede uno e vuole prendersene cura in modo adeguato. Siamo in rete dal 1994 e il nostro database, in perenne crescita, include circa 5000 ambulatori/cliniche presenti sul territorio italiano.
                </p>
            </div>
            <div class="col-12 row">
                <div class="col-12 col-lg-5">
                    <img class="img-fluid" src="https://www.belviglieriveterinarioverona.it/download/decv/19/belviglieri-vaccinazioni-verona.jpg?20200116104402" alt="">
                </div>
                <div class="col-12 col-lg-5 m-3">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde cupiditate qui, consequatur voluptatibus aliquam at, quae illum minus ratione, sapiente quibusdam! Quod expedita esse aperiam consectetur excepturi similique inventore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque excepturi voluptatem deleniti minima sunt voluptates, voluptatibus tempora cum facere quia iure molestias sint earum maxime at iusto odio doloribus obcaecati?</p>
                </div>
            </div>
            <div class="mt-5">
                <router-link class="btn btn-primary mb-4" :to="{name: 'ask_us' }">Inviaci le tue domande </router-link>
            </div>
        </div>      
    </div>
</template>
<style lang="scss">
    
</style>