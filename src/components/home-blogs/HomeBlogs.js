import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeBlog from '../home-blog/HomeBlog';
import './HomeBlogs.css'

const HomeBlogs = () => {
    const [homeBlogs, setHomeBlogs] = useState([]);

    useEffect(() => {
        fetch("./fakeData2.json")
            .then(res => res.json())
            .then(data => setHomeBlogs(data))
    }, [])
    return (
        <div className="container homeBlogs-section">
            <h1 className="text-center p-3">From Our Blogs</h1>

            <Row xs={1} sm={2} md={2} lg={12} className="g-4">
                {
                    homeBlogs.slice(1, 3).map(homeBlog => <HomeBlog key={homeBlog.key} homeBlog={homeBlog}></HomeBlog>)
                }
            </Row>

        </div>
    );
};

export default HomeBlogs;