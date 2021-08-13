import React, { Component } from "react";


const ServiceList = [
    {
        icon: '01',
        title: 'Product Development',
        description: 'We do the complete process of delivering a new product or improving an existing one for customers.'
    },
    {
        icon: '02',
        title: 'Web Development',
        description: "Building websites and web apps, it's the work that happens behind the scenes to make a website look great."
    },
    {
        icon: '03',
        title: 'APP Development',
        description: 'We expertise in in the processes of writing software for small, wireless computing devices, such as smartphones.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;