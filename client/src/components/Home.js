import React, { useEffect, useState } from 'react'
import Cart from './Cart';

export const Home = () => {
    const [userName, setUerName] = useState("");
    const [show, setShow] = useState(false);

    const userHomePage = async () =>{
try{
    const res = await fetch("/getdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    const data = await res.json();
    console.log(data);
    setUerName(data.name);
    setShow(true);

    if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
    }
}catch(err){
        console.log(err);
    }
}
const addcard = () =>{
    
}

useEffect(() => {
  userHomePage();
  addcard();
}, [])
    return (
        <div>
            <h1>Home</h1>
            <h2>{userName}</h2>
            <h2>{show ? 'we are mern stack developer' : 'not login' }</h2>
            <Cart></Cart>
        </div>
    )
}
