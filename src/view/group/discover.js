import DBconnection from "../../model/network";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import './groups.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Icon from '@mui/material/Icon';
import Form from 'react-bootstrap/Form';
import newwfeed from "./images/newfeed.png"
import { color } from "@mui/system";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Discover from './discover';


function Discover() {
    const [products ,setproducts]= useState([])
    useEffect(()=>{DBconnection.get("products").then((res)=>
    {console.log (res.data)
      setproducts(res.data)
  }).catch((err)=>{
  console.log(err)
  console.log("في error")})
  },[])

    return ( 
        <div className="body">
        <div className="d-flex">
    <div className="col-3 scroll section1">
     <div >
        <div className="d-flex"><h4 className="col-10 space">Groups</h4>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="icons bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
</div>
<div className=" bora col-10 search">
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="searchIcon" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
  <input type="search" className="search1" placeholder="Search groups"/>
</div>
<div>
    <button className="button" id="btn1" onClick={()=>{document.getElementById("icon1").style.backgroundColor="#1870e2" ;document.getElementById("btn1").style.backgroundColor="rgb(245, 245, 245)"}}>
    <img src={newwfeed} className="icons2" id="icon1"/>
    <span className="font">Your Feed</span></button>
</div>
<div>
    <button className="button" id="btn2" onClick={()=>{document.getElementById("icon2").style.backgroundColor="#1870e2" ;document.getElementById("btn2").style.backgroundColor="rgb(245, 245, 245)"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="icons" id="icon2" viewBox="0 0 16 16">
  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
</svg>
    <span className="font">Discover</span></button>
</div>
<div>
    <button className="button1 col-11" id="btn2">
    <span className="font1">+ Create new group</span></button>
</div>
<div className="line1"></div>
<h5 className="font2">Groups you've joined</h5>

    {products.map((product,index)=>{return <> <div className="d-flex ">
     <img className="img1" src={product.image}/>  
     <div>
    <p className="font3">{product.category}</p>
    <span className="font4 space2">{product.category}</span>

    </div> 
    </div></>})}</div>
    </div>
    </div>
    </div>
);
    }
export default Discover;
