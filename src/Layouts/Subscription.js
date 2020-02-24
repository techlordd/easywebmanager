import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Content() {
    return (        
        <div className="main" >
          <table>
            <thead>
            <tr>
              <th>Domain Name</th>
              <th>Backup</th>
              <th>SSL / yr</th>
              <th>Security Upgrade</th>
              <th>Theme Change</th>
              <th>SEO</th>
              <th>Digital Marketing</th>

            </tr>
            </thead>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: ">  <FontAwesomeIcon color="green" icon={faCheck}/></td>
              <td data-th="Hosting Expiring: "> <FontAwesomeIcon color="red" icon={faTimes}/></td>
              <td data-th="Status: "> Active</td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faTimes}/></td>
            </tr>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: ">  <FontAwesomeIcon color="green" icon={faCheck}/></td>
              <td data-th="Hosting Expiring: "> <FontAwesomeIcon color="red" icon={faTimes}/></td>
              <td data-th="Status: "> Active</td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faTimes}/></td>
            </tr>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: ">  <FontAwesomeIcon color="green" icon={faCheck}/></td>
              <td data-th="Hosting Expiring: "> <FontAwesomeIcon color="red" icon={faTimes}/></td>
              <td data-th="Status: "> Active</td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td><FontAwesomeIcon icon={faTimes}/></td>
            </tr>
          </table>
        </div>
    )
}
