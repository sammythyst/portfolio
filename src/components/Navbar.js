import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  let activeNav = {
    border: "1px solid var(--text)",
    color: "var(--text)",
    backgroundColor: "var(--accent)",
  };

    return (  

    <nav className="main-header-menu col-12">
      <h1 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          paddingTop: '25px',
        }}>Sam Bensema</h1>

      <h6 
        style={{
          display: 'flex', 
          justifyContent: 'center',
          paddingBottom: '25px',
        }}>They/Them</h6>

      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}>        
        <div>
          <NavLink to='/' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>About Me</NavLink>
        </div>
        <div>
          <NavLink to='/portfolio' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>Portfolio</NavLink>
        </div>
        <div>
          <NavLink to='/contact' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>Contact</NavLink>
        </div>
        <div>
          <NavLink to='/resume' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>Resume</NavLink>
        </div>
      </section>
    </nav>
    );
}

export default Navbar;