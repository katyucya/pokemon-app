import axios from "axios"

const getPokemonList = async() => {
    const resp = await axios.get("https://pokeapi.co/api/v2/pokeon/?limit=100")
    return resp.data;
}

const getPokemon = async id => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return resp.data;
}

const getPokemonImageURL = id => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export {
    getPokemonList,
    getPokemon,
    getPokemonImageURL
}