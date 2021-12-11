import React from 'react';
import { Link } from 'react-router-dom';
import { useState
 } from 'react';

 
const ButtonSearch = () => {
    const [ville, setVille] = useState('')

 let details = `details/${ville}`

    return (
        <div>
            <input onChange={event => setVille(event.target.value)} type="text" placeholder="nom de la ville" />
            

          <Link onClick={setVille} to={details}>villes</Link>
            
        </div>
    );
};

export default ButtonSearch;