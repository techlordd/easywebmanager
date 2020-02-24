import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
            <div className="sidenav">
          <Link to="/">Dashboard</Link>
          <Link to="/hosting">Hosting</Link>
          <Link to="/ownership">Ownership</Link>
          <Link to="/subscription">Subscriptions</Link>
          <a href="/">Hosting Features</a>
          <Link to="/addsite">Add Site</Link>
        </div>
    )
}
