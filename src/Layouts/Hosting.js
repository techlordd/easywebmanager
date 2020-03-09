import React , {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

// Set the output format for every react-moment instance.
//Moment.globalFormat = 'D MMM YYYY';

export default function Hosting() {
  const [hostingLists, setHostingLists] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
    .then(res => setHostingLists(res.data));  
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
            {hostingLists.length ? hostingLists.map(hostingItem =>             
            <tbody key={hostingItem._id}>
              <tr>
                <th>{hostingItem.domain_name}</th>
                <td data-th="Domain Created: ">{moment(hostingItem.host_created).format('DD-MM-YYYY')}</td>
                <td data-th="Domain Expiring: ">
                 { 
                 
                 moment(hostingItem.host_created).add(1, 'year').format('DD-MM-YYYY')
                 }</td>
                  <td data-th="Status:status"> 
                  {
                 
                 moment().diff(moment(hostingItem.hosting_created), 'months') < 7 ? 'Active': 
                 (moment().diff(moment(hostingItem.hosting_created), 'months') > 12) ? 'Expired': 'Expiring soon'
                  }

             
                 </td>
              </tr></tbody>
            
                                    
            ): <tbody><tr>No data found</tr></tbody>}
           
           </table>    
        </div>
    )
}
