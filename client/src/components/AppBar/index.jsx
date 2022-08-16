import React from 'react';
import {Link} from 'react-router-dom';
import {points} from '../../data/navigation-points';                                                        
import Navigation from '../Navigation';
import Component from '../Container'
import s from './index.module.css'
import Container from '../Container';



function AppBar (){
    return(
        <Container>
    <div className={s.container}>
        <Link to="#" className={s.logo}>from <span style={{color: 'green'}}>You</span></Link>
<Navigation items={points} />
</div>
</Container>
  
    )
}

export default AppBar