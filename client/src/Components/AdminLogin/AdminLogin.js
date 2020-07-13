import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import "./AdminLogin.css"

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        loginid: "",
        password: ""
    })
    const [authenticated, setAuthenticated] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("/apis/userDetail/login", formData)
        .then(response => {
            console.log(response)
            localStorage.setItem("adminToken", response.data.token)
            console.log(localStorage.getItem("adminToken"))
            setAuthenticated(true);
        })
        .catch(err => {
            console.log(err)
        });
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return(
        authenticated ? <Redirect to="/admin/upload" /> :
        <>
            <MainMenu />
            <div className="adminLogin">
                <h4>Admin Login</h4>
                <form onSubmit={handleSubmit} className="adminLoginForm">
                    <label className="fieldname" htmlFor="loginid">
                        LoginID
                    </label>
                    <input type="text" name="loginid" required onChange={handleChange}/>
                    <label className="fieldname" htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" required onChange={handleChange}/>
                    <button className="submit-btn btn">Login</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin;