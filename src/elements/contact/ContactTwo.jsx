import React, { Component } from "react";

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(



            <div className="contact-form--1">


<form name="contactForm" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" id="contact-form"            className="contact-form">

<input type="hidden" name="form-name" value="contactForm" />
            <p className="screen-reader-text">
              <label id="contact-form-bot-label">Don't fill this out if you're human: <input name="bot-field" aria-labelledby="contact-form-bot-label" /></label>
            </p>
            <p className="form-row">
              <label id="contact-form-name-label" htmlFor="contact-form-name" className="form-label">Name</label>
              <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" className="form-input"/>
            </p>
            <p className="form-row">
              <label id="contact-form-email-label" htmlFor="contact-form-email" className="form-label">Email address</label>
              <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" className="form-input"/>
            </p>
            <p className="form-row">
              <label id="contact-form-message-label" htmlFor="contact-form-message" className="form-label">Message</label>
              <textarea name="message" id="contact-form-message" aria-labelledby="contact-form-message-label" className="form-textarea" rows="7" />
            </p>
            <input type="hidden" aria-label="contact-form-name" name="form-name" value="contactForm" />
            <p className="form-row form-submit">
              <button type="submit" className="button">Send Message</button>
            </p>
          </form>
            


                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neq.</p>
                            </div>















                            <div className="form-wrapper">
                            <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                            <input type="hidden" name="form-name" value="contact" />
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/contact_img_800x845.jpg" alt="kuchnaya"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;