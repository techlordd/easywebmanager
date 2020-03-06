import React , {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

// Set the output format for every react-moment instance.
//Moment.globalFormat = 'D MMM YYYY';

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
                <td data-th="Domain Created: ">{moment(domainItem.domain_created).format('DD-MM-YYYY')}</td>
                <td data-th="Domain Expiring: ">
                 { 
                 
                 moment(domainItem.domain_created).add(1, 'year').format('DD-MM-YYYY')
                 }</td>
                  <td data-th="Status:status"> 
                  {
                 
                 moment().diff(moment(domainItem.domain_created), 'months') < 7 ? 'Active': 
                 (moment().diff(moment(domainItem.domain_created), 'months') > 7) &&  
                 (moment().diff(moment(domainItem.domain_created), 'months') < 12) ? 'Expiring Soon': 'Expired'
                  }

             
                 </td>
              </tr></tbody>
            
                                    
            ): <tbody><tr>No data found</tr></tbody>}
           
           </table>    
        </div>
    )
}
