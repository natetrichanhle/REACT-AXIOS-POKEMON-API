import React, {useState,useEffect} from 'react'
import axios from 'axios'

const PokemonAxios = (props) => {
    const [pokemons, setPokemons] = useState([]);
    
    const handleClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=807&limit=311')
            .then(response => {setPokemons(response.data.results)})
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemon using Axios</button>
            {pokemons.map((pokemon, index) => {
                return (
                    <p key = {index}>{pokemon.name}</p>
                )
            })}
        </div>
    )
}

export default PokemonAxios
