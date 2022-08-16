import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css'


function TodoItem ({id, text, title, done, picture,  onComplited, onDelete, onUpdate}){
    return(
        <li className={s.item}>
            <h3>{title}</h3>
            {picture && <img src={picture} alt={title} />}
            <p>{text}</p>
            <div>
<input type="checkbox" checked={done} onChange={() => onComplited(id)} id={id}/>
<label htmlFor={id}>agree</label>
</div>
<button type="button" onClick={() => onDelete(id)}>delete</button>
<button type="button" onClick={() => onUpdate(id)}>update</button>
        </li>
    )
};


TodoItem.propTypes ={
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onComplited: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default TodoItem;