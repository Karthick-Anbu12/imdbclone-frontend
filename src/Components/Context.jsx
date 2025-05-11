import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
const context = createContext()
export const UserProvider = ({ children }) => {
    const [movies,setmovies]=useState([])
    const [isloggedin,setloggedin]=useState(true)
    const getdata=async()=>{
       const response =await axios.get("https://imdbclone-backend-aiar.onrender.com/listmovies")
       setmovies(response.data)
       
    }
    useEffect(()=>{
        getdata()
    },[])
    return <context.Provider value={{movies,isloggedin,setloggedin,getdata}}>
    {children}
  </context.Provider>
}

export default context