import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
// import {Link} from "react-router-dom";


const PortfolioList = [

    {
        image: 'image-1',
        category: 'Mobile App Development',
        title: ' Social and News App',
        link: 'https://play.google.com/store/apps/details?id=com.live.hootout&hl=en_IN&gl=US'
    },
    {
        image: 'image-2',
        category: 'UI/UX Design',
        title: ' Adventure Provider',
        link: 'https://dev.gotrekket.com/'
        
    },
    {
        image: 'image-3',
        category: 'UI/UX Design',
        title: 'Payment Solutions',
        link: 'https://auropay.net/'
        
    },
    {
        image: 'image-4',
        category: 'Mobile App Development',
        title: 'Video Ads Maker for Reseller',
        link: 'https://play.google.com/store/apps/details?id=com.kuchnaya.behtarads&hl=en_IN&gl=US'
    },
    {
        image: 'image-5',
        category: 'UI/UX Design',
        title: ' Mobile Wallet',
        link: 'https://www.vrayinc.com/'

    },
    {
        image: 'image-6',
        category: 'UI/UX Design',
        title: ' Payment Forms',
        link: 'https://www.figma.com/proto/HKRlak3mFo8CWGWSR4o61D/Untitled?embed_host=share&kind=&node-id=3%3A937&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=3%3A1383&viewport=241%2C48%2C0.09'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'We always try to build brands of our clients and help to improve web presence through website & social sites.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href={value.link}>{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                
                                                <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={value.link}  >View</a>
                                            </div>
                                        </div>
                                    </div>
                                   {/* <Link className="link-overlay" target="_blank" rel="noopener noreferrer" to={value.link}  ></Link> */}

                                    {/* <Link to={{ pathname: value.link }} target="_blank" /> */}
                                    <a className="link-overlay"  target="_blank" rel="noopener noreferrer"   href={value.link} >  </a>
                                    
                                     {/* <a className="link-overlay" rel="noopener noreferrer"   href={value.link} target="_blank" />  */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;