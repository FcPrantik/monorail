import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tickets.css';

const Tickets = (props) => {
    const { title, price, img, id } = props.ticket;

    return (
        <Container className='center'>
            <Row>
                <Col>
                    <Card border="light" className="text-white cards ">
                        <Card.Img src={img} className="card-image" />
                        <Card.ImgOverlay className=''>
                            <Card.Title className='title display-6 ms-3 fw-bold position-absolute top-10 start-10'>{title}</Card.Title>
                            <Link to={`/home/${id}`}>
                                <Button className='btn btn-warning btn-lg ms-3 position-absolute top-50 start-20'>Buy Now</Button>
                            </Link>
                            <Card.Title className='price display-3 fw-bold ms-3 position-absolute bottom-0 start-10' >{price}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Tickets;