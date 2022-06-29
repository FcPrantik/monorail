import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import tickets from '../../tickets.json';
import './Direction.css';
import { Card } from 'react-bootstrap';

const location = {
    lat: 23.791599,
    lng: 90.389099
};


const Direction = () => {
    const { ticketID } = useParams();
    const ticket = tickets.find(ticket => ticket.Id === ticketID);
    const [response, setResponse] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const originRef = useRef('');
    const destinationRef = useRef('');

    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }
    const handleDirection = e => {
        setOrigin(originRef.current.value);
        setDestination(destinationRef.current.value);
        e.preventDefault();
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-4 '>
                    <form onSubmit={handleDirection} className="form" >
                        <h6>Pick From</h6>
                        <input type="text" ref={originRef} placeholder='Start from' />
                        <br />
                        <h6>Pick To</h6>
                        <input type="text" ref={destinationRef} placeholder='Destination' />
                        <br />
                        <input className='btn-direction' type="submit" value='Get Direction' />
                    </form>
                    <div className='ticket-info'>
                    <Card.Title className='fs-3 text-white bg-danger mb-1 rounded-3 p-3'>From: {originRef.current.value} <br /> To: {destinationRef.current.value}</Card.Title>
                    <Card.Title className='fs-2 bg-light mb-1 text-center rounded-3 p-3'>{ticket.title}</Card.Title>
                    <Card.Title className='fs-2 bg-light fw-bold text-center rounded-3 p-3'>Price: ${ticket.price}</Card.Title>
                    </div>
                </div>
                <div className='col-sm-12 col-md-8 map'>
                    <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
                    >
                        <GoogleMap
                            id='direction-example'
                            mapContainerStyle={{
                                height: '600px',
                                width: '850px'
                            }}

                            zoom={14}
                            center={location}
                        >

                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING'
                                }}
                                // required
                                callback={directionsCallback}
                            />

                            {
                                response !== null && (
                                    <DirectionsRenderer
                                        // required
                                        options={{
                                            directions: response
                                        }}
                                    />
                                )
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
};

export default Direction;