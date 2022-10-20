import React, { useEffect, useState } from "react";
import {
  BrowserRouter  as Routee,
  Routes ,
  Route,
  useParams,
} 
from "react-router-dom";
import person from "./images/person.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import DBconnection from "../../model/network";
import Categories from './Categories';
import '../group/groups.css'
import Groups from './groups';
function Product() {
    const parm=useParams();
    const id=parm.id;
    const [product,setproduct]= useState({})
    useEffect(()=>{DBconnection.get("products/"+id).then((res)=>
    {console.log (res.data)
      setproduct(res.data)
  }).catch((err)=>{
  console.log(err)
  console.log("في error")})
  },[])
  return (
    <div>
    <div  className="text-center d-flex" >
        <div className="col-2"></div>
     <div className="border-bottom pb-2 col-8">   
    <div className="col-8">
        <img className="img5  mb-3" src={product.image}/> 
    </div>
    <div className="col-2"></div>
    <div className="d-flex border-bottom">
    <div className="col-4">
    <h3>{product.category}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" classNamw=" bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
    <span className="font11 ms-2" >{product.category}</span>
    <span className="font11" >. {product.id}</span>
    </div>
    <div className="col-3"></div>
    <div className="col-5"><button className="btn2 ms-4"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-people-fill me-2 mb-2" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>Join group</button>
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="35" fill="currentColor" className=" ms-1 icons3 bi bi-chevron-down" viewBox="0 0 16 16" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>

</svg> 
  <div class="collapse card3" id="collapseExample">
  <div class="card card-body ">
    <h5 className="text-start">Related groups</h5>
    <div className="text-center"><img className="img6" src={person}/>
    <h5 > No recommendations to show</h5>
    <button className="btn2">Explore groups</button></div>

  </div>
</div>
</div>

    </div>
    <div className="col-12 d-flex">
    <div className="col-6 me-5">
     <span className="opacity-80 ms-2 font7">About</span>
     <span className="opacity-80 me-5 font7">Discussion</span></div>
     <div className="col-6 ms-5">
     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="35" fill="currentColor" className="icons3 pb-2 bi bi-reception-0" viewBox="0 0 16 16" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
  <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>
<div class="collapse" id="collapseExample1">
  <div class="card card-body col-6">
    <div className="d-flex">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 mt-1 bi bi-chat-right-text" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>
<h6>Your content</h6>
</div>
<div className="d-flex">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" me-2 bi bi-reply" viewBox="0 0 16 16">
  <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
</svg>
<h6>Share</h6>
</div>
<div className="d-flex">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-exclamation-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>
<h6>Report group</h6>
</div>

  </div>
</div>
</div>
</div>
    </div> 
    </div>
    <div className="d-flex bg-light pt-5">
    <div className="col-3 "></div>
    <div className="card col-6 p-3">
        <h5 className="text-start border-bottom pb-3">About this group</h5>
    </div>
    </div>
   </div>
  );
}

export default Product;