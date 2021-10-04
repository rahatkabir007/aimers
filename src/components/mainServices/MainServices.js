import React from 'react';
import  { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import MainService from '../mainService/MainService';
import "./MainServices.css";


const MainServices = () => {
    const [mainServices, setMainServices] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setMainServices(data))
    }, [])
    return (
        <div className="main-service-section">
            <div className="container p-5">
                <div className="heading-title">
                    <h1 className="text-center p-3">Our Services</h1>
                </div>

                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {
                       mainServices.map(servedData=> <MainService key={servedData.key} servedData={servedData}></MainService>)
                    }
                </Row>
            </div>

            <div className="text-center pb-4">
                <Button variant="outline-dark">Load More</Button>
           </div>

        </div>
    );
};

export default MainServices;