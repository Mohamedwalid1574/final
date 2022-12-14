import DBconnection from "../../model/network";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './groups.css'
import newwfeed from "./images/newfeed.png"
import 'bootstrap/dist/js/bootstrap.bundle.js'

import {
    Link
  } from "react-router-dom";

function Discover(prams) {
    const [products ,setproducts]= useState([])
    useEffect(()=>{DBconnection.get("products").then((res)=>
    {console.log (res.data)
      setproducts(res.data)
  }).catch((err)=>{
  console.log(err)
  console.log("في error")})
  },[])

    return ( 
        <div className="bg-light body">
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
    <Link to='/feed' className="link2"><button className="button">
    <img src={newwfeed} className="icons2"/>
    <span className="font">Your Feed</span></button></Link>
</div>
<div>
    <button className="button" id="btn2" >
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

    {products.map((product,index)=>{return <> <Link to={"/discussion/"+product.id} className="link2"><div className="d-flex ">
     <img className="img1" src={product.image}/>  
     <div>
    <p className="font3">{product.category}</p>
    <span className="font4 space2">{product.category}</span>

    </div> 
    </div></Link></>})}</div>
    </div>
    <div className="col-9 ms-5 section3 bg-light">
        
      <div className="d-flex col-9">
        
        <div className="col-10">
        <h5 className="font9">Popular near you</h5>
        <p className="font10">Groups people in your area are in</p>
        </div>
        <a href="/seemore" className="link ms-5">See more</a>


  </div>

<div id="demo" className="carousel slide " data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5" ></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6" ></button>
    
    
  </div>

    <div className="carousel-inner">
    <div className="carousel-item active col-5 bg-light">
    <div className="container">
            <div className="row ">
   <div className="card col-5">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
  </div>
    <div className="carousel-item  bg-light">
    
    <div className="container">
            <div className="row ">
   <div className="card col-5 space4">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
  
      </div> 
      <div className="carousel-item  bg-light">
    
    <div className="container">
            <div className="row ">
   <div className="card col-5 space4">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
  
      </div> 
      <div className="carousel-item  bg-light">
    
    <div className="container">
            <div className="row ">
   <div className="card col-5 space4">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
  
      </div> 
      <div className="carousel-item  bg-light">
    
    <div className="container">
            <div className="row ">
   <div className="card col-5 space4">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
  
      </div>   
    <div className="carousel-item  bg-light">
    <div className="container">
            <div className="row ">
   <div className="card col-5 space4">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  <div className="card col-5 ms-3">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>
  </div>
    </div>
    </div>
    <div className="carousel-item  bg-light">
    <div className="container">
            <div className="row ">
   <div className="card col-5">
  <img src={"https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/175810105_3713542632074658_2500379176738270685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEZatUzXZeuowem61MQpWR675_rtcYgrPDvn-u1xiCs8M9xYdW4wcSDk2u-Mmy9z3Su9MC5bf8QczAtalyGaYJI&_nc_ohc=O8-A1GT3rZEAX9aaz0y&_nc_ht=scontent.fcai19-7.fna&oh=00_AT9Sfma0teY3-XkvZGetCAo5bxnlaTzE3P7sQAEC1da-vg&oe=63754ACD"} className="card-img-top card1" alt="..."/>
  <div className="card-body">
    <h5 className=" font6">FWD Web Development participants</h5>
    <p className="font5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn1 col-11 font7">Join group</a>
  </div>
  </div>  
  <div className="card col-5 bg-light border1">
    <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="img4 bi bi-arrow-right-circle " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></a>
  <div className="card2">
    <a className="img3" href="/">see more</a>
  </div>
  </div>
    </div>
</div>
</div>
</div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="bb"></div>
<h4 className="font9">More suggestions</h4>
    
    {products.map((product,index)=>{return <>
        <Link to ={"/aboutgroup/"+product.id} key={index} className="link2"><div className="d-inline-flex col-5 m-2" >
                <div className="card col-12 ">
     
                    <img className="card-img-top card1" src={product.image}/>  
                    <div className="card-body">
                        <h5 className="font6 ">{product.category}</h5>
                        <p className="font5">{product.category}</p>
                        <a href="#" className="btn btn1 col-11 font7">Join group</a>
                    </div> 
                </div>
                </div>
                </Link>
              
              
    
              
    </>})}
    </div>
    </div>
    </div>
    
);
    }
export default Discover;
