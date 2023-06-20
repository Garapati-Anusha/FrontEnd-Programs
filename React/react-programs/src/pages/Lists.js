import React from 'react';
import ItemList from './ItemList';

const Lists = ({items,  handleChange, handleDelete}) => {
    
  return (
    <div>
      {items.length ? (
        <ItemList items={items}  handleChange={handleChange} handleDelete={handleDelete}/>
      ) : <p style={{fontSize:'2em'}}>List is empty</p>  }
    </div>
  )
}

export default Lists;
