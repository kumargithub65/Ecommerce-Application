import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import { Route, useNavigate,Routes } from "react-router-dom";

export  default function Protectedroute({children}){
  
    const [a,seta ] = useState(true)
    let navagate = useNavigate()
   let token =  Cookies.get("token")
   if(token === undefined){

    useEffect(()=>{
    if(a){
     seta(false)
       }
    return navagate("/signup")
},[])
   }

   return children
}