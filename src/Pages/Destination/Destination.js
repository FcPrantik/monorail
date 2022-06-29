import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 23.791599,
    lng: 90.389099
};


const Destination = () => {
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

export default Destination;