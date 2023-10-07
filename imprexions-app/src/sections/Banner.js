import React from "react";
import "./../sections/Banner.scss";
import { Link } from "react-router-dom";
import icon from "./../assets/banner/icons/phone.svg";
import bannerImg from "./../assets/banner/001.png";
import doctorImg from "./../assets/banner/doctor.png";
import bannerPattern from "./../assets/banner/eyes.svg";
// import shapeOne from "./../assets/banner/vector_1.jpg";
// import shapeTwo from "./../assets/banner/vector_2.png";
// import shapeThree from "./../assets/banner/vector_01.png";
// import shapeFour from "./../assets/banner/vector_02.png";

const Banner = () => {
    return ( 
        <section className="section-bg section-common banner-section">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>Entrust your vision to a professional</h1>
                                    <p>Your search for the best eye clinic in Accra is over! We Provide High Quality Eye Care Services. Get your glasses same day.</p>
                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/">Book an Appointment</Link>
                                        </div>
                                        <div className="banner-call">
                                            <div className="icon">
                                                <img src={icon} alt="icon"/>
                                            </div>
                                            <div className="call-text">
                                                <p>Eye Care 24H Emergency</p>
                                                <h6>233 23 553 5960</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-img-area">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model"/>
                                    </div>
                                    <div className="info-box">
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor"/>
                                        </div>
                                        <div className="info-text">
                                            <p>Dr. June Gaelica</p>
                                            <p><small>Consultant</small></p>
                                        </div>
                                    </div>
                                    {/* VECTOR SHAPES */}
                                    {/* <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BANNER PATTERN */}
            <img src={bannerPattern} alt="banner pattern" className="banner-pattern"/>
        </section>
     );
}
 
export default Banner;