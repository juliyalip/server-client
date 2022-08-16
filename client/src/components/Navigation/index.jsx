import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './index.module.css'


function Navigation ({items}){

    const getClassName = ({isActive}) =>(
        isActive? s.active: s.nav)
    
    return(
        <nav >
        
            {items.map(({point, path}) =>(
                <NavLink key={point} to={path} className={getClassName}>{point}</NavLink>
            ))}
        
        </nav>
        
    )
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default Navigation;