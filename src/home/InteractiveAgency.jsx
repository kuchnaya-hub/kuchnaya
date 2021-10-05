import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Helmet from "../component/common/Helmet";

import ScrollToTop from 'react-scroll-up';
import { FiPackage, FiTablet, FiGlobe, FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

import BrandTwo from "../elements/BrandTwo";




const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--33',
        category: 'We are Agency',
        title: 'Technology & innovation for Agency services.',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
   
]

const ServiceList = [
    {
        icon: <FiPackage />,
        title: 'Product Development',
        description: 'We do the complete process of delivering a new product or improving an existing one for customers'
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
        description: 'We expertise in in the processes of writing software for small, wireless computing devices, such as smartphones .'
    },
    {
        icon: <FiGlobe />,
        title: 'Website Development',
        description: "Building websites and web apps, it's the work that happens behind the scenes to make a website look great."
    },
    {
        icon: <FiMonitor />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]

const InteractiveAgency = () => {
    return (
        <>
            <Helmet pageTitle="Services" />
            <Header />
            
            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                <div className="slider-activation">
                    {SlideList.map((value , index) => (
                        <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">What do we do?</h2>
                                        <p className="description">We are a product development company with a separate project execution team for the client. We are full stacked developers and architects and use tech stack that is relevant for the business.</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Working Process.</h3>
                                                <div className="rn-progress-bar progress-bar--3">
                                                    <div className="single-progress custom-color--1">
                                                        <h6 className="title">Designing</h6>
                                                        <ProgressBar now={90} />
                                                        <span className="label">90%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--2">
                                                        <h6 className="title">Managment</h6>
                                                        <ProgressBar now={80} />
                                                        <span className="label">80%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--3">
                                                        <h6 className="title">Marketing</h6>
                                                        <ProgressBar now={85} />
                                                        <span className="label">85%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--4">
                                                        <h6 className="title">Development</h6>
                                                        <ProgressBar now={97} />
                                                        <span className="label">97%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}

             {/* Start Service Area */}
             <div className="service-area creative-service-wrapper pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <h2>Our Service</h2>
                                <p>We provide best services as per client s requirement. We work on latest technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className="row creative-service">
                        {ServiceList.map( (val , i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <div className="text-center" >
                                    {/*<a className="text-center" href="/service-details"> */}
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Service Area */}


            {/* Start Brand Area  */}
            <div className="rn-brand-area pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Brand Area  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <FooterTwo />
        </>
    )
}

export default InteractiveAgency
