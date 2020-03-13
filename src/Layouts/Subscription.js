import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


export default function Subscription() {
  const [subscriptionData, setsubscriptionData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/posts')
    .then(res=> setsubscriptionData(res.data));
  });
    return (        
        <div className="main" >
          <table>
            <thead>
            <tr>
              <th>Domain Name</th>
              <th>Subscription Plan</th>
              <th>Backup</th>
              <th>SSL / yr</th>
              <th>Security Upgrade</th>
              <th>Theme Change</th>
              <th>SEO</th>
              <th>Digital Marketing</th>

            </tr>
            </thead>
            {subscriptionData.length ? subscriptionData.map(subscriptionItem =>
            <tr>
            <th>{subscriptionItem.domain_name}</th>
            <td className="center">{subscriptionItem.subscription_plan}</td>
            <td className="center" data-th="Backup: ">{subscriptionItem.backup === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
            <td className="center" data-th="SSL: ">{subscriptionItem.ssl === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
            <td className="center" data-th="Security Upgrade: ">{subscriptionItem.security_upgrade === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
            <td className="center" data-th="Theme Change: ">{subscriptionItem.theme_change === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
            <td className="center" data-th="SEO: ">{subscriptionItem.seo === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
            <td className="center" data-th="Digital Marketing: ">{subscriptionItem.digital_marketing === 'yes' ?  
              <FontAwesomeIcon color="green" icon={faCheck}/> : 
              <FontAwesomeIcon color="red" icon={faTimes}/> } </td>
              
          </tr>   
              ): <p>No data Found</p>}
          </table>
        </div>
    )
}
