import React from 'react';
// import {FaTrash} from 'react-icons/fa';
import ItemList from './ItemList';

const Lists = ({items,  handleChange, handleDelete}) => {
    // const items = [{id:1, checked:false, item:"Apples"},
    //                 {id:2, checked:false, item:"Bread"},
    //                 {id:3, checked:false, item:"Milk"}
    //               ]
    // const [list, setList] = useState(items);
    // const handleChange = (id) => {
    //   const listItems = list.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    //   setList(listItems);
    //   localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    // }
    // const handleDelete = (id) => {
    //   const listItems = list.filter((item) => item.id !== id);
    //   setList(listItems);
      
    // }
  return (
    <div>
      {items.length ? (
        // <ul>
        //     {items.map((item) =>(
        //         <li className="item" key={item.id}>
        //             <input type="checkbox" onChange= {() => handleChange(item.id)} checked={item.checked}/>
        //             <label>{item.item}</label>
        //             <FaTrash role="button" onClick={() => handleDelete(item.id)}/>
        //         </li>
        //     ))}
        // </ul>    
        <ItemList items={items}  handleChange={handleChange} handleDelete={handleDelete}/>
      ) : <p style={{fontSize:'2em'}}>List is empty</p>  }
    </div>
  )
}

export default Lists;

