import React from "react";

const Package = () => {
    return(
        <section className="package">
            <h2>Best Price Guaranteed</h2>
            <section>
                <div className="package-detail">
                    <div className="package-content-top">
                        <i className="fa fa-paper-plane"></i>
                        <h3>Basic Package</h3>
                        <h4>$10.00 <sub>Per Month</sub></h4>
                    </div>
                    <ul>
                            <li> Free Ad Posting </li>
                            <li>15 Features Ad Availability</li>
                            <li>For 15 Days</li>
                            <li>100% Secure</li>
                    </ul>
                    <a href='/' className="buy-btn">Buy Now</a>
                </div>
                <div className="package-detail">
                    <div className="package-content-top">
                        <i className="fa fa-plane"></i>
                        <h3>Standard Package</h3>
                        <h4>$30.00 <sub>Per Month</sub></h4>
                    </div>
                    <ul>
                            <li> Free Ad Posting </li>
                            <li>15 Features Ad Availability</li>
                            <li>For 15 Days</li>
                            <li>100% Secure</li>
                    </ul>
                    <a href='/' className="buy-btn">Buy Now</a>
                </div>
                <div className="package-detail">
                    <div className="package-content-top">
                        <i className="fa fa-rocket"></i>
                        <h3>Premium Package</h3>
                        <h4>$50.00 <sub>Per Month</sub></h4>
                    </div>
                    <ul>
                            <li> Free Ad Posting </li>
                            <li>15 Features Ad Availability</li>
                            <li>For 15 Days</li>
                            <li>100% Secure</li>
                    </ul>
                    <a href='/' className="buy-btn">Buy Now</a>
                </div>
            </section>
        </section>
    )
}

export default Package;