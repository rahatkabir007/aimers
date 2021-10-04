import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    const { image, title, teacher, description } = props.blog;
    return (
        <div>
            <Col className="h-100">
                <Card className="h-100 card">
                    <Card.Img className='h-100' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title id="title">{title}</Card.Title>
                        <Card.Text id="teacher">
                            {teacher}
                        </Card.Text>
                        <Card.Text id="description">
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Blog;