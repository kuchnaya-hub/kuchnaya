import React ,{ Component }from "react";
import { FiPackage , FiGlobe , FiUsers , FiTablet, FiMonitor } from "react-icons/fi";
import { GrAnnounce, GrDown } from "react-icons/gr";

const ServiceList = [
    {
        icon: <GrAnnounce />,
        title: 'Behtar Ads',
        description: 'Behtar Ads - Video Ads Maker for Reseller helps you to create video ads of your reselling product.'
    },
    {
        icon: <GrAnnounce />,
        title: 'HootOut',
        description: "HootOut is a platform to share your stories with friends. Choose any template and create your story"
    },
    {
        icon: <GrDown />,
        title: 'Vidyback',
        description: 'Vidyback is a platform where sellers can make video ads of their products with a click of a button- Coming Soon'
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
                                    <span style={{ color: "red" }} >{val.icon}</span>
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
