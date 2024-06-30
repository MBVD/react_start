import Header from './Header';
import Content from './Content';
import Content2 from './Content2';
import { useState, useEffect } from 'react';
import Footer from './Footer'
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Poshel Nahui')) || []);

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect (() => {
    localStorage.setItem('Poshel Nahui', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1 
    const myNewItem = { id: id, checked: false, item: item }
    const listItems = [...items, myNewItem];
    setItems(listItems);
    
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, 
      checked: !item.checked} : item)
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log("submitted");
  }
  return (
    <div className="App">
      <Header title = "T52" />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content2 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
