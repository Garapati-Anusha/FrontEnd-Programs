import React,{useState} from 'react';

const Content = () => {
    const [name,setName] = useState ("User")

  const handleNameChange = () => {
    const names = ['Ram', 'Ravi', 'Riya']
    const i = Math.floor(Math.random()*3)
    setName(names[i]);
  }
  return (
    <main>
        <p>Hello {name}</p>
        <button onClick={handleNameChange}>Click</button>
    </main>
  )
}

export default Content;
