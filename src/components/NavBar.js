import React from 'react';
import { Link  } from 'react-router-dom';
import ButtonSearch from './ButtonSearch';
const NavBar = () => {

   
        
      
    
    return (
        <div className="navBar">

            <Link  className="details" to="/weathers/:id">Pages details</Link>

            <form action="hello">
                
        
               <ButtonSearch></ButtonSearch>
               
             </form>
        </div>
    );
};

export default NavBar;