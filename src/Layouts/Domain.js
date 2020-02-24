import React from 'react'

export default function Domain() {
    return (        
        <div className="main" >
          <table>
            <thead>
            <tr>
              <th>Domain Name</th>
              <th>Created</th>
              <th>Expiring</th>
              <th>Status</th>

            </tr>
            </thead>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: "> {Date.now()}</td>
              <td data-th="Hosting Expiring: "> {Date.now()}</td>
              <td data-th="Status: "> Active</td>
            </tr>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: "> {Date.now()}</td>
              <td data-th="Hosting Expiring: "> {Date.now()}</td>
              <td data-th="Status: "> Active</td>
            </tr>
            <tr>
              <th>techlorddkonsult.com</th>
              <td data-th="Hosting Created: "> {Date.now()}</td>
              <td data-th="Hosting Expiring: "> {Date.now()}</td>
              <td data-th="Status: "> Active</td>
            </tr>
          </table>
        </div>
    )
}
