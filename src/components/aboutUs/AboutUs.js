import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="heading-title">
                <h1 className="text-center p-3">About US</h1>
            </div>
            <Row  className="w-75 mx-auto m-5 " >
                <Col md={6}  >
                    <img className="w-100 p-4" src={require("../../images/slider (1).jpg").default} alt="" srcset="" />
                    <img className="w-100 p-4" src={require("../../images/slider (2).jpg").default} alt="" srcset="" />
                </Col>
                <Col md={6} >
                    <img className="w-100 p-4" src={require("../../images/slider (3).jpg").default} alt="" srcset="" />
                    <img className="w-100 p-4" src={require("../../images/slider (4).jpg").default} alt="" srcset="" />
                </Col>
            </Row>
            <h4 className="text-center m-5 p-4">Aimers Established in 2008, Aimers empowers students in their pursuit of learning, discovery, leadership and engagement. Located in a sprawling metropolis, our premier Tier One campus provides students with cutting-edge programs including undergraduate, graduate, doctoral, distance and continuing education studies. Ranked among the best Institution in Bangladesh, UH is home to award-winning faculty, innovative research centers, alumni who have become international leaders and one of the most diverse student populations in the nation. At Aimers, we prepare students to envision their future, emerge as leaders and launch careers that transform the world.</h4>
        </div>
    );
};

export default AboutUs;