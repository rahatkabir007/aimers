import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-around align-items-center second-section">
                <div className="list-items">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className="text-center">Contact Us</li>
                        <li><i class="fas fa-phone"></i>  +88018942323324</li>
                        <li><i class="fas fa-envelope-open"></i>  aimers@hotmail.com</li>
                        <li><i class="fas fa-address-card"></i>  19 No. Essential Tower, Bangladesh</li>
                    </ul>

                </div>
                <div className="subscribe">
                    <Form className="">
                        <FormControl
                            type="search"
                            placeholder="Subscribe"
                            className="mb-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Subscribe</Button>
                    </Form>
                </div>
            </div>
            <div className="copyright-text" >
                <p>Copyright ©2021 All rights reserved | This Project is Done By Rahat</p>
            </div>
        </div>
    );
};

export default Footer;