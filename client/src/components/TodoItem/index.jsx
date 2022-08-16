import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.css'


function TodoItem ({id, text, title, done, picture,  onComplited, onDelete, onUpdate, date}){
  const dateStr = date.slice(0, 10)
    return(
        <li className={s.item}>
            <div>
            <h3>{title}</h3>
            <span>date: {dateStr}</span>
            </div>
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
    date: PropTypes.string,
    onComplited: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}


export default TodoItem;