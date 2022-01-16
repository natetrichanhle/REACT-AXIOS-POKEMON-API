import React, {useState,useEffect} from 'react'

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    
    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=807&limit=311")
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemon</button>
            {pokemons.map((pokemon, index) => {
                return (
                    <p key = {index}>{pokemon.name}</p>
                )
            })}
        </div>
    )
}

export default Pokemon
