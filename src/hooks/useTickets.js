import { useEffect, useState } from "react";

const useTickets = () => {
    const [tickets, setTickets] = useState({});
    useEffect(() => {
        fetch('./tickets.json')
            .then(res => res.json())
            .then(data => setTickets(data));
    }, []);
    return [tickets];
}

export default useTickets;