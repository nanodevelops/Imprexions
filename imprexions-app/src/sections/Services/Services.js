import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from "./ServicesData";
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle title="Feel amazing about your vision health" subTitle="Services"/>
                    </div>
                    <div className="col-lg-6">
                        <p className='service-title-text'>Welcome to Imprexions Eye Care! Our optometrists and eye care staff are here to care for all your vision needs.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map((singleService, index) => (<Service key={index} serviceList={singleService}/>))
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;