import React , {useState, useEffect} from 'react';
import axios from 'axios';

export default function Domain() {
  const [domainLists, setDomainLists] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
    .then(res => setDomainLists(res.data));   
  });

    return (        
        <div className="main" >
          <table>
              <tbody><tr>
              <th>Domain Name</th>
              <th>Created</th>
              <th>Expiring</th>
              <th>Status</th>
            </tr></tbody>
            {domainLists.length ? domainLists.map(domainItem =>             
            <tbody key={domainItem._id}>
              <tr>
                <th>{domainItem.domain_name}</th>
                <td data-th="Domain Created: ">{domainItem.domain_created}</td>
                <td data-th="Domain Expiring: ">{domainItem.domain_expiring}</td>
                <td data-th="Status: ">Active</td>
              </tr></tbody>
            
                                    
            ): <tbody>No data found</tbody>}
           
           </table>    
        </div>
    )
}
