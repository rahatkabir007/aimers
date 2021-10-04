import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import Blog from '../blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./fakeData2.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container homeBlogs-section">
            <div className="heading-title">
                <h1 className="text-center p-3">Our Blogs</h1>
            </div>

            <Row xs={1} sm={2} md={2} lg={12} className="g-4">
                {
                   blogs.map(blog=><Blog key={blog.key} blog={blog}></Blog>)
                }
            </Row>
            <div className="text-center p-4">
                <Button variant="outline-dark">Load More</Button>
            </div>

        </div>
    );
};

export default Blogs;