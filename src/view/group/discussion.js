import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Routee,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import person from "./images/person.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import DBconnection from "../../model/network";
import Categories from "./Categories";
import "../group/groups.css";
import Groups from "./groups";
import { Link } from "react-router-dom";
import newwfeed from "../group/images/newfeed.png";
function Discussion() {
  const parm = useParams();
  const id = parm.id;
  const [product, setproduct] = useState({});
  useEffect(() => {
    DBconnection.get("products/" + id)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("في error");
      });
  }, []);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    DBconnection.get("products")
      .then((res) => {
        console.log(res.data);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("في error");
      });
  }, []);
  return (
    <div className="">
      <div className="d-flex">
        <div className="col-3 scroll section1">
          <div>
            <div className="d-flex">
              <h4 className="col-10 space">Groups</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="icons bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </div>
            <div className=" bora col-10 search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="searchIcon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                type="search"
                className="search1"
                placeholder="Search groups"
              />
            </div>
            <div>
              <button className="button" id="btn1">
                <img src={newwfeed} className="icons2" id="icon1" />
                <span className="font">Your Feed</span>
              </button>
            </div>
            <div>
              <Link to="/discover">
                <button className="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="icons"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                  </svg>
                  <span className="font">Discover</span>
                </button>
              </Link>
            </div>
            <div>
              <button className="button1 col-11" id="btn2">
                <span className="font1">+ Create new group</span>
              </button>
            </div>
            <div className="line1"></div>
            <h5 className="font2">Groups you've joined</h5>

            {products.map((product, index) => {
              return (
                <>
                  {" "}
                  <Link to={"products/" + product.id} className="link2">
                    <div className="d-flex ">
                      <img className="img1" src={product.image} />
                      <div>
                        <p className="font3">{product.category}</p>
                        <span className="font4 space2">{product.category}</span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-center d-flex border-bottom pb-2">
            <div className=" col-10">
              <div className="col-10 min-heigth">
                <img className="img5 mb-3" src={product.image} />
              </div>
              <div className="col-2"></div>
              <div className="d-flex border-bottom ps-2">
                <div className="col-4 mb-4">
                  <h3>{product.category}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className=" bi bi-bag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                  </svg>
                  <span className="font11 ms-2">{product.category}</span>
                  <span className="font11">. {product.id}</span>
                </div>
                <div className="col-4"></div>
                <div className="col-5">
                  <button className=" ms-2 button2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-people-fill me-2 mb-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                      />
                      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                    Joined{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                  <button className="btn2 ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className=" bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                    Invite
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="35"
                    fill="currentColor"
                    className=" ms-1 icons3 bi bi-chevron-down"
                    viewBox="0 0 16 16"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <div class="collapse col-12" id="collapseExample">
                    <div class="card card-body ">
                      <h5 className="text-start">Related groups</h5>
                      <div className="text-center">
                        <img className="img6" src={person} />
                        <h5> No recommendations to show</h5>
                        <button className="btn2">Explore groups</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex">
                <div className="col-4 me-5 ms-5 mt-3">
                <Link className="link2" to={"/about/"+product.id}><span className="opacity-80 ms-1 font7 ">About</span></Link>
                  <Link className="link2" to={"/discussion/"+product.id}><span className="opacity-80 me-3 font7 color2">
                    Discussion
                  </span></Link>
                  <Link className="link2" to={"/feature/"+product.id}><span className="opacity-80 me-3 font7 ">Featured</span></Link>
                  <Link className="link2" to={"/people/"+product.id}><span className="opacity-80 me-3 font7 ">People</span></Link>
                  <Link className="link2" to={"/media/"+product.id}><span className="opacity-80 me-3 font7 ">Media</span></Link>
                  <Link className="link2" to={"/files/"+product.id}><span className="opacity-80 me-3 font7 ">Files</span></Link>
                </div>
                <div className="col-6"></div>
                <div className="col-3 mt-3 ms-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    fill="currentColor"
                    className="icons3 bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                  <div class="collapse" id="collapseExample1">
                    <div class="card card-body col-12">
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="me-2 mt-1 bi bi-chat-right-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <h6>Your content</h6>
                      </div>
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className=" me-2 bi bi-reply"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                        </svg>
                        <h6>Share</h6>
                      </div>
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="me-2 bi bi-exclamation-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                        </svg>
                        <h6>Report group</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex bg-light pt-4 ">
            <div className="col-6 ms-5 me-3">
              <div className="card d-flex">
                <form className="border-bottom p-2">
                  <img className="img6 m-2" src={product.image} />
                  <input
                    type="text"
                    className="search1 col-9"
                    placeholder="Write Something..."
                  />
                </form>
                <div className="ms-5 d-inline-flex ps-3 pe-3 pt-3 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="rgb(255, 70, 70)"
                    className="bi bi-camera-reels-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
                  </svg>
                  <h6 className="ms-2 ">Reel</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="green"
                    className="ms-5 bi bi-images"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                  </svg>
                  <h6 className="ms-2 ">Photo/Video</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="orange"
                    className="ms-5 bi bi-bar-chart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                  </svg>
                  <h6 className="ms-2 ">Poll</h6>
                </div>
              </div>
              <div className="card d-flex mt-3 p-3">
                <div className="d-flex">
                  <h5 className="me-5">Featured</h5>
                  <div className="ms-5 col-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="ms-5 col-11 bi bi-info-circle"
                      viewBox="0 0 16 16"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>

                    <div className="collapse" id="collapseWidthExample">
                      <div>
                        <h5>About Featured</h5>
                        <p>
                          Your admins have pinned these items for the group to
                          see.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="d-flex">
                    <img className="img6 m-2" src={product.image} />
                    <div>
                      <h6 className="m-1">{product.category}</h6>
                      <p>{product.price}</p>
                    </div>
                  </div>

                            <div className="d-inline-flex col-5 m-2">
                              <img className="img7" src={product.image} />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{product.title}</h5>
                              <p className="card-text">{product.description}</p>
                            </div>
                        
                  </div>
              </div>
              <div className="m-3">
                  <h5>Most Relevant</h5>
                </div>
            </div>
            <div className="col-5">
              <div className="card col-12 p-3 mb-4">
                <h5 className="text-start border-bottom pb-3">
                  About this group
                </h5>
                <p>{product.description}</p>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" mt-1 bi bi-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                  <div className="ms-2">
                    <h5>Private</h5>
                    <span>
                      Only members can see who's in the group and what they
                      post.
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    fill="currentColor"
                    className="mt-1 bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                  <div className="ms-1">
                    <h5>Visible</h5>
                    <span>Anyone can find this group.</span>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" mt-1 bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <div className="ms-2">
                    <h5>{product.title}</h5>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mt-1 bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                  <div className="ms-2">
                    <h5>General</h5>
                  </div>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mt-1 bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
                  <div className="ms-2">
                    <h5>History</h5>
                    <span>Group created on {product.price}</span>
                  </div>
                </div>
              </div>
              <div className="card col-12 mb-4 p-3 d-inline-flex border-bottom">
                <h5 className="text-start pb-3  border-bottom">
                  Popular topics in this group
                </h5>
                <h5>{product.price}</h5>
                <p>{product.category}</p>
                <h5>{product.price}</h5>
                <p>{product.category}</p>
                <h5>{product.price}</h5>
                <p>{product.category}</p>
              </div>
              <div className="card col-12  p-3 mb-4 d-inline-flex border-bottom">
                <h5 className="text-start pb-3  border-bottom">Recent media</h5>
                <div>
                  <div className="ml-1">
                    <div>
                      {products.map((product, index) => {
                        if (index < 4) {
                          return (
                            <>
                              <div className="d-inline-flex col-5 m-2">
                                <img
                                  className="img-fluid"
                                  src={product.image}
                                />
                              </div>
                            </>
                          );
                        }
                      })}
                    </div>
                    <Link to="/media">
                      <button className="col-12 button2 pb-3">
                        <span className="font">See more</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Discussion;
