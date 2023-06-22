import React from 'react';
// import {HashRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router,Route,Routes,withRouter} from "react-router-dom";
import CRUD from '../pages/CRUD';
import AddUser from '../pages/AddUser';
import EditUser from '../pages/EditUser';
import ViewUser from '../pages/ViewUser';
import Navbar from '../pages/NavBar';
import ChangeColor from '../pages/ChangeColor';
import ToDoApp from '../pages/ToDoApp';
import Home from '../pages/Home';
import UserForm from '../pages/UserForm';

const Routerpage = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/crud" element ={<CRUD/>}/>
                <Route path="/users/add" element={<AddUser/>} />
                <Route path="/users/edit/:id" element={<EditUser/>} />
                <Route path="/users/:id" element={<ViewUser/>} />
                <Route path="/changeColor" element={<ChangeColor/>} />
                <Route path="/toDoApp" element={<ToDoApp/>} />
                <Route path="/customHook" element={<UserForm/>} />
            </Routes>
        </Router>
      
    </div>
  )
}

export default Routerpage;
