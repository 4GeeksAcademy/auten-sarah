import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Private() {
    
    const navigate = useNavigate();

    useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
        navigate("/login");
    }
}, []);

const logout = () => {
    sessionStorage.removeItem("accessToken")
    navigate("/login")
}


return (
    <>
   <div className="wave-text">
  <span>I</span><span>F</span><span>&nbsp;</span>
  <span>Y</span><span>O</span><span>U</span><span>&nbsp;</span>
  <span>G</span><span>O</span><span>T</span><span>&nbsp;</span>
  <span>H</span><span>E</span><span>R</span><span>E</span><span>,</span>
</div>
<div className="wave-text">
  <span>Y</span><span>O</span><span>U</span><span>&nbsp;</span>
  <span>A</span><span>R</span><span>E</span><span>&nbsp;</span>
  <span>S</span><span>P</span><span>E</span><span>C</span><span>I</span><span>A</span><span>L</span>


</div>
  <button className="btn btn-secondary btn-sm" onClick={logout}>Log out</button>
</>
)

}