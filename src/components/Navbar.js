import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  let activeNav = {
    borderBottom: "1px solid var(--purple)",
    color: "var(--purple)"
  };

  const nav = {
    display: 'flex',
    alignItems: 'center',
  }

    return (  

    <nav className="main-header-menu w-100 d-md-inline-flex justify-content-between">
      <h1 className='m-4' style={{paddingLeft: '35px'}}>Sam Bensema <span>(they/them)</span></h1>
      
      <section style={nav} className='m-4'>        
        <div>
          <NavLink to='/' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>About</NavLink>
        </div>
        <div>
          <NavLink to='/portfolio' style={({ isActive }) =>
              isActive ? activeNav : undefined
            }>Portfolio</NavLink>
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