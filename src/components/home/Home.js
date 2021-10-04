import React from 'react';
import HomeAbout from "../home-about/HomeAbout";
import HomeBlogs from '../home-blogs/HomeBlogs';
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <HomeBlogs></HomeBlogs>
        </div>
    );
};

export default Home;