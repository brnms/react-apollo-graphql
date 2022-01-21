import React from 'react';
import "./CharacterList.css"
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

export default function CharactersList() {
    const {error, loading, data} = useCharacters();

    if(loading) return <div>Loading...</div>

    if(error) return <div>Something went wrong</div>

    return <div className='CharacterList'>
        {data.characters.results.map(character => {
            return <Link to={`/${character.id}`} key={character.id}>
                <img src={character.image} />
                <h2>{character.name}</h2>
            </Link>
        })}
    </div>;
}
