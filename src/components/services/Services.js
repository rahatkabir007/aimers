import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service'
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="service-section">
            <div className="container p-5">
                <h1 className="text-center p-3">Our Services</h1>

                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {
                        services.slice(0, 4).map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
           </div>

        </div>
    );
};

export default Services;