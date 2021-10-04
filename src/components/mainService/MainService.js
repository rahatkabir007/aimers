import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MainService = (props) => {
    const { image, title, teacher, description, price, rating } = props.servedData;
    return (
        <div>
            <Col className="h-100">
                <Card className="h-100 card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title id="title">{title}</Card.Title>
                        <Card.Text id="teacher">
                            {teacher}
                        </Card.Text>
                        <Card.Text id="description">
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='card-footer'>
                        <div className="rating-price d-flex justify-content-between align-items-center">
                            <div className="rating h-100">
                                <p><i class="fa fa-star"></i> {rating}</p>
                            </div>
                            <div className="price h-100">
                                {price === 'Free' ? <a href="/" style={{ backgroundColor: '#2C394B' }}>{price}</a> : <a href="/" style={{ backgroundColor: '#3E2C41' }}>${price}</a>}
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default MainService;