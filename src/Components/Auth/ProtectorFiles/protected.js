import React from "react";
import { Route, Redirect } from "react-router-dom";

function Protected({component , ...rest}) {
    var RenderComponents = component;
    let hasToken = JSON.parse(localStorage.getItem('auth'));
   
    return (
        <Route
            {...rest}
            render = {
                props => {
                        return hasToken !== null ? (
                            <RenderComponents {...props} />
                        ) : (
                            <Redirect to={{
                                pathname:"login"
                            }} />
                        )
                        
                        }
            }       
        />
    )
}

export default Protected;