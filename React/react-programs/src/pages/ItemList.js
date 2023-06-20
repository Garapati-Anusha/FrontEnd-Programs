import React from 'react';
import {FaTrash} from 'react-icons/fa';

const ItemList = ({items, handleChange,handleDelete}) => {
  return (
    <ul>
            {items.map((item) =>(
                <li className="item" key={item.id}>
                    <input type="checkbox" onChange= {() => handleChange(item.id)} 
                          checked={item.checked}/>
                    <label>{item.item}</label>
                    <FaTrash role="button" onClick={() => handleDelete(item.id)}/>
                </li>
            ))}
        </ul> 
  )
}

export default ItemList
