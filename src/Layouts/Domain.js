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
          
            {domainLists.length ? domainLists.map(domainItem => 
            <table key={domainItem._id}>
              <tbody><tr>
              <th>Domain Name</th>
              <th>Created</th>
              <th>Expiring</th>
              <th>Status</th>
            </tr></tbody>
            
            <tbody><tr key={domainItem._id}>
                <th>{domainItem.domain_name}</th>
                <td data-th="Domain Created: "> {domainItem.domain_created}</td>
                <td data-th="Domain Expiring: "> {domainItem.domain_expiring}</td>
                <td data-th="Status: "> Active</td>
              </tr></tbody>
            
                </table>                        
            ): <h2>No data found</h2>}
           
        
        </div>
    )
}
