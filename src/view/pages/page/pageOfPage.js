import "../../profile/profile.css"
import coverPhoto from "../../profile/image/One_Piece-9f62b3e6-bd9c-423b-b154-09b15a724f62.jpg"
import profilePhoto from "../../profile/image/Dragon_ball_super-2a89a1a6-e6f4-4fe0-8a12-f537883dc644.jpg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default function Pageofpage() {

    return (
        <>
            <div className='profile'>
                <div className='cover'>
                    <img src={coverPhoto} className='cover-image' />

                </div>
                <div className='d-flex cover justify-content-between align-items-end mb-2'>
                    <div className='d-flex'>
                        <div className='whiteprofile'><img src={profilePhoto} className='profilephoto' /></div>
                        <div className='ms-3 mt-4'>
                            <h4 className='mbe'>mohamed walid</h4>
                            <p className='mbs'>136 likes . 12 following</p>

                        </div>
                    </div>
                    <div>
                        <button className='me-3 bg-primary button text-white p-1'>WhatsApp</button>
                        <button className='me-3 bg-secondary button bg-opacity-25 p-1'>Message</button>
                        <button className=' button bg-secondary bg-opacity-25 p-1'>Like</button>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='btn '>posts</div>
                        <div className='btn '>about</div>
                        <div className='btn '>Mentions</div>
                        <div className='btn '>Reviews</div>
                        <div className='btn '>Followers</div>
                        <div className='btn '>Photos</div>
                        <div className='btn '>
                            <div className='dropdown '>
                                <button className='btn dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>more</button>
                                <ul className='dropdown-menu' >
                                    <li><a className='dropdown-item' herf='#'>Sports</a></li>
                                    <li><a className='dropdown-item' herf='#'>Music</a></li>
                                    <a className='dropdown-item' herf='#'>Films</a>
                                    <a className='dropdown-item' herf='#'>TV Programmes</a>
                                    <a className='dropdown-item' herf='#'>Books</a>
                                    <a className='dropdown-item' herf='#'>Groups</a>
                                    <a className='dropdown-item' herf='#'>Events</a>
                                    <a className='dropdown-item' herf='#'>Likes</a>
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

                    <div className='d-flex justify-content-between '>
                        <section className=' section1 mt-3'>
                            <div className='card ps-4 py-2'>
                                <h5>intro</h5>
                                <div className=' mt-3'>Page.Praoduct/Service</div>
                                <div className=' mt-3  '>1021396068</div>
                                <div className=' mt-3 '>Not yet rated (0reviews)</div>

                            </div>

                            <div className='card  mt-3 p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>Photos</h4>
                                    <p className='text-primary mbe'>See All Photos</p>
                                </div>



                                <div  >
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px'}} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px'}} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px' }} />


                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%' ,marginTop:'1%'}} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px'}} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%' ,marginTop:'1%'}} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px' }} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px'}} />


                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px' }} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%',marginTop:'1%' }} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px' }} />

                                    </div>
                                    <div style={{ display: 'inline-block', width: '32%', marginRight: '1%' ,marginTop:'1%'}} >
                                        <img src={coverPhoto} style={{ width: '100%', height: '130px'}} />


                                    </div>
                                </div>
                                </div>
                        </section>
                        <section className=' section2  mt-3'>
                            <div className='card  p-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>Posts</h4>
                                    <div className='btn bg-secondary bg-opacity-25 me-2' >Fiters</div>
                                </div>
                            </div>



                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}