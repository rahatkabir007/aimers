import React from 'react';
import Header from "../header/Header";
import HomeAbout from "../home-about/HomeAbout";
import Services from '../services/Services';
import HomeBlogs from '../home-blogs/HomeBlogs';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <HomeBlogs></HomeBlogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;