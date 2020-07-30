import React from "react";
import "./signIn.css";

function Login(props) {
    
    function handleClick() {
        props.onChanged();
      }

        return (
            <div className ="signIn-div-background"> <form className="signIn-div">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    <p className="forgot-password text-right">
                    <a href="#">FORGOT PASSWORD?</a></p>
                    </div>
                </div>

                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password text-center">
                New to GeoWebMap? <a href="#" onClick={handleClick}>SIGN UP</a>
                </p>
            </form>
        </div>
        );
    }



export default Login;