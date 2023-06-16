import React,{useState} from 'react';

const ChangeColor = () => {
    const [mycolor,setMycolor] = useState("white");

    const handleColorChange = (col) => {
        setMycolor();
    }

  return (
    <div>
        <div className='colorBox' style={{backgroundColor:mycolor}}></div>
        <br></br>
        <input type='text' name="color" onChange={(e) =>setMycolor(e.target.value)}/>
    </div>
  )
}

export default ChangeColor;
