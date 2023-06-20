import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
      });
      const { id } = useParams();
      useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:3500/users/${id}`);
        setUser(res.data);
        console.log(res);
      };
      return (
        <div className="container py-4">
          <Link className="btn btn-primary" to="/crud">
            Back 
          </Link>
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50 my-1">
            <li className="list-group-item">name: {user.name}</li>
            <li className="list-group-item">user name: {user.username}</li>
            <li className="list-group-item">email: {user.email}</li>
            <li className="list-group-item">phone: {user.phone}</li>
            <li className="list-group-item">website: {user.website}</li>
          </ul>
        </div>
      );
}

export default ViewUser
