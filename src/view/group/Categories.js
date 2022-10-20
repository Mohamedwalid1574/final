import DBconnection from "../../model/network";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import './groups.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Icon from '@mui/material/Icon';
import Form from 'react-bootstrap/Form';
import newwfeed from "./images/newfeed.png";
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Categories() {
    const [products ,setproducts]= useState([])
    useEffect(()=>{DBconnection.get("products").then((res)=>
    {console.log (res.data)
      setproducts(res.data)
  }).catch((err)=>{
  console.log(err)
  console.log("في error")})
  },[])

    return ( 
        <div className="bg-light">
        <div className="d-flex">
    <div className="col-3  section1">
     <div>
        <div className="d-flex"><h4 className="col-10 space">Categories</h4>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="icons bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
</div>
</div>
<div className=" bora col-10 search">
<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="searchIcon" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
  <input type="search" className="search1" placeholder="Search groups"/>
</div>
    </div>
    <div className="col-9 ms-5 section3 bg-light">
<h4 className="font9">Popular near you</h4>
    
    {products.map((product,index)=>{return <>
        <div className="container bg-light">
            <div className="row">
                
                <div className="card col-5 mb-3 space4">
     
                    <img className="card-img-top card1" src={product.image}/>  
                    <div className="card-body">
                        <h5 className="font6">{product.category}</h5>
                        <p className="font5">{product.category}</p>
                        <a href="#" className="btn btn1 col-11 font7">Join group</a>
                    </div> 
                </div>
                
                
                <div className="card col-5 mb-3 ms-3">
     
                    <img className="card-img-top card1" src={product.image}/>  
                    <div className="card-body">
                        <h5 className="font6">{product.category}</h5>
                        <p className="font5">{product.category}</p>
                        <a href="#" className="btn btn1 col-11 font7">Join group</a>
                    </div> 
                </div>
              
    
            </div>
        </div>  
    </>})}
    </div>
    </div>
    </div>
    
    
);
    }
export default Categories;
