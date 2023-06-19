import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Lists from './components/Lists';
import ChangeColor from './components/ChangeColor';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {
  // const list = [{id:1, checked:false, item:"Apples"},
  //                   {id:2, checked:false, item:"Bread"},
  //                   {id:3, checked:false, item:"Milk"}
  //                 ]
    const API_URL = "http://localhost:3500/items";
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [search,setSearch] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState("true");

    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error("Did not receive expected Data")
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null);
        } catch (err){
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      (async () => await fetchItems())();
    },[])

    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;
      const myNewItem = {id, checked:false, item};
      const listItems = [...items,myNewItem];
      setItems(listItems);
    }

    const handleChange = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);
      
    }
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      console.log(id,listItems);
      setItems(listItems);      
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setNewItem('');

    }
  return (
    <div className="App">
      <Header/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem search= {search} setSearch={setSearch}/>
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Lists items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}  handleChange={handleChange} handleDelete={handleDelete}/>}
      </main>
      {/* <Content/> */}
      {/* <Footer length = {items.length}/> */}
      {/* <ChangeColor/> */}
    </div>
  );
}

export default App;
