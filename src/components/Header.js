import React from 'react'

export default function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Shop {new Date().getDay}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}
