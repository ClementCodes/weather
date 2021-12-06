import React from 'react';
import { Link } from 'react-router-dom';
import { useState
 } from 'react';

const ButtonSearch = () => {
    const [title, setTitle] = useState('')

    const activateSearch = () => {
    

        <Link  to="/weathers/:id" ></Link>
}

console.log(title);


    return (
        <div>
             <input onChange={event => setTitle(event.target.value)}  type="text" placeholder="nom de la ville" />
                <button onClick={activateSearch} >submit</button>
        </div>
    );
};

export default ButtonSearch;