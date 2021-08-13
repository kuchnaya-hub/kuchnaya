import React ,{ Component }from "react";
import { FiPackage , FiGlobe , FiUsers , FiTablet, FiMonitor } from "react-icons/fi";

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
        title: 'App Development',
        description: 'We expertise in in the processes of writing software for small, wireless computing devices, such as smartphones.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'App Development',
        description: 'We expertise in in the processes of writing software for small, wireless computing devices, such as smartphones.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            {/* <a class="text-center" href="/service-details"> */}
                            <div class="text-center" >
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                                </div>
                           {/*  </a>  */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
