import React from 'react';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import './Service.scss';

const Service = ({serviceList}) => {
    const {title,description, icon} = serviceList;
    
    return (
        <div className='col-lg-3'>
           <div className="service-box">
                <div className="service-icon">
                   <ThemeIcon icon={icon} />
                </div>
                <div className="service-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
           </div>
        </div>
    );
};

export default Service;