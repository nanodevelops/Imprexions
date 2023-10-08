import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "../../sections/Services/Services.scss";
import ServicesData from "./ServicesData";
import Service from "../../components/Service/Service";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Services = () => {
    return ( 
        <section className="service section pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle title="Feel amazing about your vision health" subTitle="Services"/>
                    </div>
                    <div className="col-lg-6">
                        <p className="service-title-text">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, 
                            and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>
            <div className="services-link text-center">
                <Link to="/">
                    View all our services
                    <BsFillArrowRightCircleFill />
                </Link>
            </div>
        </section>
     );
}
 
export default Services;