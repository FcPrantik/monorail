import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tickets from '../Tickets/Tickets';
import './Home.css';

const Home = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('./tickets.json')
            .then(res => res.json())
            .then(data => setTickets(data));
    }, [])

    return (
        <div className='container'>
            <Row  sm={1} md={2} lg={4} className='g-4 center'>
            {
                    tickets.map(ticket => <Tickets
                        key={ticket.id}
                        ticket={ticket}
                    >
                    </Tickets>)
                }
            </Row>
        </div>
    );
};

export default Home;