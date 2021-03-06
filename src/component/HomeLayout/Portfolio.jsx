import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Development',
        title: ' WalkMyMind is an app offered through employers and insurers.',
        link: 'https://in.godaddy.com/'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Adventure Provider',
        link: 'https://dev.gotrekket.com/'
        
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Video Ad Maker for Resellers',
        link: 'https://play.google.com/store/apps/details?id=com.kuchnaya.behtarads&hl=en_IN&gl=US'
        
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Social and News App',
        link: 'https://play.google.com/store/apps/details?id=com.live.hootout&hl=en_IN&gl=US'
    },
    {
        image: 'image-5',
        category: 'Development',
        title: ' Getting tickets to the big show',
        link: 'https://in.godaddy.com/'
    },
    {
        image: 'image-6',
        category: 'Development',
        title: ' Getting tickets to the big show',
        link: 'https://in.godaddy.com/'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
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
                                                
                                                <a className="rn-btn" href={value.link}>View</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to={value.link}></Link>

                                   {/*<Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />  */} 
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