import React,{useState} from 'react';
import useInput from './useInput';

const UserForm = () => {
     const [firstName, bindFirstName, resetFirstName] = useInput('');
     const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
  return (
    <div>
        <form onSubmit={submitHandler}> 
            <br/>
            <div>
                <label>First name</label>
                <input 
                    // value={firstName}
                    // onChange = {e => setFirstName(e.target.value)}
                    {...bindFirstName}
                    type = 'text'
                    className='ms-2'
                />
            </div>
            <br/>
            <div>
                <label>Last name</label>
                <input 
                    // value={lastName}
                    // onChange = {e => setLastName(e.target.value)}
                    {...bindLastName}
                    type = 'text'
                    className='ms-2'
                />
            </div>
            <br/>
            <button style={{backgroundColor:"cyan",padding:"0px 0px", color:"black"}}>Submit</button>
        </form>      
    </div>
  )
}

export default UserForm;
