import React from "react";
import "./siginUp.css"

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";


function SignUp(props) {

    const formik = useFormik({
        initialValues : {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        validationSchema:yup.object({
            firstname: yup.string()
            .required("Name is required")
            .strict()
            .trim()
            .min(3 ,"Minimun 3 character required")
            .max(15 ,"Maxmun 15 character only"),

            lastname: yup.string(),

            email: yup.string()
            .email()
            .required("Email is required"),
          
            password: yup.string()
            .required("password is required"),
            
            confirmpassword: yup.string()
            .oneOf([yup.ref("password"), null], "confirm password and password must me same")
            .required("password is required"),


        }),
        onSubmit: (userInputData)=>{
            axios.post("http://localhost:3001/api/register",userInputData)
            .then(res => {
               toast.success("successfully register");
                props.history.push('/login')

            }) 
            .catch(err =>{
                    toast.error(err.response.data);
                })
        }
    } )

   

  
        return (
            <div className ="signUp-div-background"> 
            
            <form className="signUp-div" autoComplete="off" onSubmit = {formik.handleSubmit}>
                <ToastContainer />
                <h3 className="text-center">Sign Up</h3>
                <div className="form-group">
                    <label >First name</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}  
                    placeholder="First name" />
                </div>
                {formik.errors.firstname ? (<div className="text-danger">
                        {formik.errors.firstname}
                </div>): null }

                <div className="form-group">
                    <label >last name</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}  
                    placeholder="last name" />
                </div>

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

                <div className="form-group">
                    <label >confirm Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}  
                    placeholder="confirm Password" />
                </div>

                {formik.errors.confirmpassword ? (<div className="text-danger">
                        {formik.errors.confirmpassword}
                </div>): null }

                <button type="submit" className="btn btn-success btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login" >sign in?</a>
                </p>
            </form>
            </div>
        );
    }


export default SignUp;