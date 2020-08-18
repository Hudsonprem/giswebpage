import React,{ useState } from "react";
import "./signIn.css";
import axios from "axios";
import {  ToastContainer , toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

function Login(props) {
  
    const formik = useFormik({
        initialValues : {
            email:"",
            password:""
        },
        validationSchema:yup.object({
           
            email: yup.string()
            .email()
            .required("Email is required"),
          
            password: yup.string()
            .required("password is required"),
            
        }),
        onSubmit: (userInputData)=>{
            axios.post("https://obscure-wave-01555.herokuapp.com/api/login", userInputData)
                .then (response => {
                        localStorage.setItem('auth',JSON.stringify(response.data)); 
                        props.history.push('/giswebpage/home'); 
                    })
                .catch(err =>        
                    toast.error(err.response.data)
                        )
        }
    } )


        return (
            <div className ="signIn-div-background">
             <ToastContainer /> 
            <form className="signIn-div"  autoComplete="off" onSubmit = {formik.handleSubmit}>
                <h3>Sign In</h3>
               

                <div className="form-group">
                    <label>Email</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}  
                    placeholder="email" />
                </div>
                {formik.errors.email ? (<div className="text-danger">
                        {formik.errors.email}
                </div>): null }

                <div className="form-group">
                    <label >Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}  
                    placeholder="Password" />
                </div>

                {formik.errors.password ? (<div className="text-danger">
                        {formik.errors.password}
                </div>): null }

                <button type="submit"   className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password text-center">
                New to GeoWebMap? <a href="/register" >SIGN UP</a>
                </p>
            </form>
        </div>
        );
    }



export default Login;