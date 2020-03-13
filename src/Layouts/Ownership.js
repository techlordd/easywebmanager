import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Ownership() {
  const [ownershipData, setownershipData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/posts')
    .then(res=> setownershipData(res.data));
  });

    return (        
        <div className="main" >
          <table>
            <thead>
            <tr>
              <th>Domain Name</th>
              <th>Contact Address</th>
              <th>Phone Number</th>
              <th>Membership ID</th>
              <th>Owner</th>
              <th></th>

            </tr>
            </thead>
            {ownershipData.length ? ownershipData.map(ownershipItem =>
            <tr>
            <th>{ownershipItem.domain_name}</th>
            <td data-th="Contact Address: "> {ownershipItem.contact_address}</td>
            <td data-th="Phone Number: "> {ownershipItem.phone_number}</td>
            <td data-th="Membership Id: "> {ownershipItem.membership_id}</td>
            <td data-th="Site Owner: "> {ownershipItem.owner}</td>
          </tr>   
              ): <p>No data Found</p>}
          </table>
        </div>
    )
}
