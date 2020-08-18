import React, { useEffect,useState } from "react";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';

const Home = (props) => {
    const [json , setJson]  = useState([]);
    useEffect(() => {
        axios.get("https://obscure-wave-01555.herokuapp/api/getall",
        {
            headers : {"auth": `${ JSON.parse(localStorage.getItem("auth"))}` }
        })
        .then(res => {
           return( 
             setJson(res.data.map(datum =>{
                 return  (
                         datum.firstname
                     )
             }))
        )
        }) 
        .catch(err =>{

            })

    })
    return(
        <div>
        <div>
    {json.map(data =>{
        return ( <ListGroup>
            <ListGroup.Item>UserName Logged = {data}</ListGroup.Item>
            </ListGroup>)
    })}</div>
            
            <button style={{width:"100%"}} onClick = {()=>
            {
                localStorage.clear();
                props.history.push('/giswebpage/login');

            }} className="btn btn-primary" > Logout</button>
        </div>
    )
    
}

export default Home;