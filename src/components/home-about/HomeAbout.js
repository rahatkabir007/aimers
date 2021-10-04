import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/slider (1).jpg';
import './home-about.css';

const HomeAbout = () => {
    return (
        <div className="container home-about">
            <div className="d-md-flex align-items-center justify-content-around aboutus-container">
                <div className="image w-50">
                    <img className="w-75" src={img} alt="" />
                </div>
                <div className="info w-50">
                    <h2>About Us</h2>
                    <p>Enquiring minds, inspirational teaching, pioneering research, global ambition, local commitment and social purpose. These are the foundations that shape the Aimers Foundation.</p>
                    <NavLink to="/aboutus"> <button className="btn btn-outline-dark main-btn">Find Out More About Who We Are</button></NavLink>
                </div>
            </div>
        </div>

    );
};

export default HomeAbout;