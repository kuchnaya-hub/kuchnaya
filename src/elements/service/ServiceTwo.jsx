import React, { Component } from "react";
import { FiPackage, FiUsers , FiTablet, FiGlobe} from "react-icons/fi";




const ServiceList = [
    {
        icon: <FiPackage />,
        title: 'Product Development',
        description: 'We do the complete process of delivering a new product or improving an existing one for customers.'
    },
    {
        icon: <FiGlobe />,
        title: 'Web Development',
        description: "Building websites and web apps, it's the work that happens behind the scenes to make a website look great."
    },
    {
        icon: <FiUsers />,
        title: 'Business Augmentation',
        description: 'Staff augmentation allows a company to add staff based on the additional skills required.'
    },
    {
        icon: <FiTablet />,
        title: 'Mobile App Development',
        description: 'We expertise in in the processes of writing software for small, wireless computing devices, such as smartphones.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We provide best services as per client s requirement. We work on latest technologies';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/interactive-agency"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                   {/* <a href="/service-details"> */} 
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    {/* </a> */} 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
