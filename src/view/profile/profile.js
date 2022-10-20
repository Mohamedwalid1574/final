import "./profile.css"
import coverPhoto from "./image/One_Piece-9f62b3e6-bd9c-423b-b154-09b15a724f62.jpg"
import profilePhoto from "./image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Profile() {

    return (

        <>
            <div className='profile'>
                <div className='cover'>
                    <img src={coverPhoto} className='cover-image' />
                    <button className='cover-button d-flex align-items-center' >
                        <i className="fa-solid fa-pen"></i>
                        add cover photo</button>
                </div>
                <div className='d-flex cover justify-content-between align-items-end mb-2'>
                    <div className='d-flex'>
                        <div className='whiteprofile'><img src={profilePhoto} className='profilephoto' /></div>
                        <div className='ms-3 mt-4'>
                            <h4 className='mbe'>mohamed walid</h4>
                            <p className='mbs'>1.3k friends</p>
                            <div className='d-flex'>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                                <div className='whitephoto'><img src={coverPhoto} className='friendsphoto' /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='me-3 bg-primary button text-white p-1'>add to store</button>
                        <button className=' button bg-secondary bg-opacity-25 p-1'>edit profile</button>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='btn '>posts</div>
                        <div className='btn '>about</div>
                        <div className='btn '>photos</div>
                        <div className='btn '>friends</div>
                        <div className='btn '>videos</div>
                        <div className='btn '>check-ins</div>
                        <div className='btn '>
                            <div class="dropdown-center">
                                <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    more
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className='dropdown-item' herf='#'>Sports</a></li>
                                    <li><a className='dropdown-item' herf='#'>Music</a></li>
                                    <li> <a className='dropdown-item' herf='#'>Films</a></li>
                                    <li> <a className='dropdown-item' herf='#'>TV Programmes</a></li>
                                    <li>  <a className='dropdown-item' herf='#'>Events</a></li>
                                    <li> <a className='dropdown-item' herf='#'>Likes</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className='btn bg-secondary bg-opacity-25 p-1 mbs mbe'>
                        <p className=' mbs mbe'>...</p>
                    </div>
                </div>

            </div>
            <div className='   bg-secondary bg-opacity-25'>
                <div className='profile    '>

                    <div className='d-flex justify-content-between mt-3'>
                        <section className=' section1 mt-3'>
                            <div className='card ps-4 py-2'>
                                <h5>intro</h5>
                                <div className='btn mt-3 button-width100 bg-secondary bg-opacity-25 '>add bio</div>

                                <i className='bi bi-camera-fill'></i>
                                <div className='btn mt-3 button-width100 bg-secondary bg-opacity-25 '>edit details</div>
                                <div className='btn mt-3 button-width100 bg-secondary bg-opacity-25 '>add hobies</div>
                                <div className='btn my-3 button-width100 bg-secondary bg-opacity-25 '>add featured</div>
                            </div>
                            <div className='card  mt-3 p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>Photos</h4>
                                    <p className='text-primary mbe'>See all photos</p>
                                </div>
                            </div>
                            <div className='card  mt-3 p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>Friends</h4>
                                    <p className='text-primary mbe'>See all friends</p>
                                </div>
                                <p> 1,385 friends</p>
                                <div  >

                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%', marginTop: '1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px', borderRadius: '10px' }} />
                                        <p>mohamed walid</p>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className=' section2  mt-3'>
                            <div className=' card'>
                                <div className=' d-flex align-items-center justify-content-between p-2'>
                                    <img src={profilePhoto} className='smallprofilephoto' />
                                    <input type="search" placeholder="what’s on your mind ?" className='rounded-pill my-2  bg-secondary bg-opacity-25' style={{ width: '90%', border: '0 solid black', height: '40px' }} />

                                </div>
                                <hr className='mx-2 mbs mbe' />
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <div className='d-flex align-items-center'>
                                        <img />
                                        <p>Live video</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img />
                                        <p>Photo/video</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img />
                                        <p>Life event</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card mt-3 pt-2 '>
                                <div className=' d-flex justify-content-between px-2 pb-2'>
                                    <h4>Posts</h4>
                                    <div>
                                        <div className='btn bg-secondary bg-opacity-25 me-2' >Fiters</div>
                                        <div className='btn bg-secondary bg-opacity-25 '>Manage posts</div>
                                    </div>
                                </div>
                                <hr className='mbs mbe' />
                                <div className='d-flex justify-content-around mbs mbe'>
                                    <div className='btn mbs mbe'>List view</div>
                                    <div className='btn mbs mbs'>Grid view</div>
                                </div>

                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}