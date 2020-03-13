import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function WebsiteFeatures() {
  const [featuresData, setfeaturesData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/posts')
    .then(res=> setfeaturesData(res.data));
  })

    return (        
        <div className="main" >
          <table>
            <thead>
            <tr>
              <th>Domain Name</th>
              <th>Pages </th>
              <th>Subdomains</th>
              <th>Emails</th>
              <th>Storage Space</th>
              <th>Bandwidth</th>

            </tr>
            </thead>
            {featuresData.length ? featuresData.map(featuresItem =>
            <tr>
            <th>{featuresItem.domain_name}</th>
            <td data-th="Membership Id: "> {featuresItem.membership_id}</td>
            <td data-th="Site Owner: "> {featuresItem.owner}</td>
            <td data-th="Phone Number: "> {featuresItem.phone_number}</td>
            <td data-th="Membership Id: "> {featuresItem.membership_id}</td>
            <td data-th="Site Owner: "> {featuresItem.owner}</td>
          </tr>   
              ): <p>No data Found</p>}
          </table>
        </div>
    )
}
