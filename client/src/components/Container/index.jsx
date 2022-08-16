import React from 'react';
import PropTypes from 'prop-types';

import s from './index.module.css'

function Container ({children, width}){
    return (
        <div className={s.container} style={{width: width ? width : ''}}>
         
{children}
        </div>
    )
}

Container.propTypes ={
    children: PropTypes.node.isRequired,
    width: PropTypes.string
  
};



export default Container