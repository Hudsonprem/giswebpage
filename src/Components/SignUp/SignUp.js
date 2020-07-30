import React from "react";
import "./siginUp.css"

function SignUp(props) {

    function handleClick() {
        props.onChanged();
      }

  
        return (
            <div className ="signUp-div-background"> <form className="signUp-div">
        
                <h3 className="text-center">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-success btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick}>sign in?</a>
                </p>
            </form>
            </div>
        );
    }


export default SignUp;