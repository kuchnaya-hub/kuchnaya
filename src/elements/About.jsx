import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import BrandTwo from "../elements/BrandTwo";
// import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
        let title = 'About',
        description = 'Kuchnaya has assembled a world class engineering, strategic and design team with over 50 years of collective experience. We believe in product development be it inhouse or for clients. We are driven by ideas and its execution.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about_500x665.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                <h3 className="title">Who We Are </h3>
                                                <p>We are self-driven entrepreneurs who enjoy product development and execution.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                <h3 className="title">What We Do</h3>
                                                <p>We are a product development company with a separate project execution team for the client.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Work Now</h4>
                                <p>Connect with us for any kind of product development or services. Hope you connect with us and discuss your next big idea and plan its execution with us.</p>
                                <a className="rn-btn btn-white" href="/contact">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/about_landscape_1287x703.jpg" alt="About"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

               

 

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About