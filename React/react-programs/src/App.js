import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Lists from './components/Lists';
import ChangeColor from './components/ChangeColor';

function App() {
  const list = [{id:1, checked:false, item:"Apples"},
                    {id:2, checked:false, item:"Bread"},
                    {id:3, checked:false, item:"Milk"}
                  ]
    const [items, setItems] = useState(list);

    const handleChange = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);
      
    }
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      
    }
  return (
    <div className="App">
      <Header/>
      <Lists items={items}  handleChange={handleChange} handleDelete={handleDelete}/>
      {/* <Content/> */}
      <Footer length = {items.length}/>
      {/* <ChangeColor/> */}
    </div>
  );
}

export default App;
