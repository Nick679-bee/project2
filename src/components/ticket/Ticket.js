import React, { useEffect, useState } from 'react';
import './ticket.css';

function Ticket() {
const [tickets, setTickets] = useState([]);

useEffect(() => {
fetch('https://airline-app.onrender.com/flights')
.then(res => res.json())
.then(setTickets)
}, []);

const addFlight = () => {
const newFlight = {
id: tickets.length + 1,
destination: 'New Destination',
departureTime: 'New Departure Time'
};

handlePostFlight(newFlight)
  .then(data => setTickets([...tickets, data]))
  .catch(error => console.log(error));
};

  async function handlePostFlight(flightData) {
  try {
    const response = await fetch('https://airline-app.onrender.com/flights', {
      method: 'POST',
      body: JSON.stringify(flightData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle the error here
    throw new Error(error.message);
  }
}

return (
<div>
<h1>We have a total of {tickets.length} Tickets</h1>
<button onClick={addFlight}>Add Flight</button>
</div>
);
}

export default Ticket;



