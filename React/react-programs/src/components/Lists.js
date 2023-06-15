import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';

const Lists = () => {
    const items = [{id:1, checked:false, item:"Apples"},
                    {id:2, checked:false, item:"Bread"},
                    {id:3, checked:false, item:"Milk"}
                  ]
    const [list, setList] = useState(items);
  return (
    <div>
        <ul>
            {items.map((item) =>(
                <li className="item" key={item.id}>
                    <input type="checkbox" checked={item.checked}/>
                    <label>{item.item}</label>
                    <FaTrash role="button"/>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Lists

