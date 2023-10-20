import React from "react";
function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="col-md-12">
                <div className="col-md-3 p-4 logo">
                    <img src="/png/logo-no-background.png"></img>
                </div>
            </div>
            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="row text-center ">
                        <div className="col-md-2 col-sm-6 cr">
                            <h3 className="f-head">ABOUT Travel Genix</h3>
                            <p>Who We Are</p>
                            <p>Blog</p>
                            <p>Work With Us</p>
                            <p>Investor Relations</p>
                            <p>Report Fraud</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="col-md-2 col-sm-6 cy">
                            <h3 className="f-head">TRAVOVERSE</h3>
                            <p>Travix</p>
                            <p>Blinkit</p>
                            <p>Feeding India</p>
                            <p>Hyperpure</p>
                            <p>Amazica</p>
                        </div>
                        <div className="col-md-2 col-sm-6 cb">
                            <h3 className="f-head">FOR TRAVELS</h3>
                            <p>Work With Us</p>
                            <p>Investor Relations</p>
                            <h3 className="f-head">FOR ENTERPRISES</h3>
                            <p>Who We Are</p>
                            <p>Blog</p>
                        </div>
                        <div className="col-md-2 col-sm-6 cg">
                            <h3 className="f-head">LEARN MORE</h3>
                            <p>Privacy</p>
                            <p>Security</p>
                            <p>Terms</p>
                            <p>Sitemap</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div class="bigbox2-ch1">
                                <h3 className="text-center">SOCIAL LINK</h3>
                            </div>
                            <br /><br />
                            <div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-10 row icon-size -center">
                                    <img src="/icon/facebook.png" alt="" />
                                    <img src="/icon/linkedin.png" alt="" />
                                    <img src="/icon/instagram.png" alt="" />
                                    <img src="/icon/twitter.png" alt="" />
                                    <img src="/icon/youtube.png" alt="" />
                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <marquee>&copy; Copyright 2023 Reserved</marquee>
                </div>
            </div>
        </div>
    )
}
export default Footer;