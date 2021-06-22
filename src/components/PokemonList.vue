<template>
    <h1> Pokémon App</h1>
    <loader v-if="isloading"/>
    <div  
        class="div-pokemon" 
        v-for="(pokemon, index) in list" 
        :key="index" 
         @click="selectPokemon()">
         <img :src="getPokemonImage(getPokemonId(pokemon.url))"/>
        {{pokemon.name}}
    </div>
</template>

<script>
import {getPokemonList, getPokemonImage, getPokemonImageURL} from "../service/pokemon-service.js";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import Loader from "./Loader";

export default {
    component:{
        Loader,
    },
    setup() {
        const list = ref([]);
        const router = useRouter();
        const isloalding = ref(false);

        onMounted(() => {
            isloalding.value = true;
            getPokemonList().then(resp => {
               // console.log("resp");
                list.value = resp.results;
            }).finally(() => {
                isloalding.value = false;
            });
        });

        const getPokemonId = (url) => url.replace("https://pokeapi.co/api/v2/pokemon/", "").repace("/", "");

        const getPokemonImage = (id) => getPokemonImageURL(id);

        const selectPokemon = (id) => router.push({name: "pokemon", params: {id}});
            //console.log(id);

        return { list, isloalding, getPokemonId, getPokemonImage, selectPokemon};
    },
};
</script>

<style scoped>
.div-pokemon{
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    margin: 0.5rem;
    cursor: pointer;
}
</style>