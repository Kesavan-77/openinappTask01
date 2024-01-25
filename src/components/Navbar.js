import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../assets/logo.svg';
import Notify from '../assets/notify.svg'
import User from '../assets/user.png'

function Navbar() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (index) => {
    setSelectedOption((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <IconContext.Provider value={{}}>
      <div className='navbar'>
        <Link to='/dashboard' className='menu-bars'>
            <img src={Logo} alt="logo" />
            <p>Base</p>
        </Link>
        <Link to='/dashboard' className='menu-bars-2'>
        <img src={Notify} alt="logo" className='notify'/>
        <img src={User} alt='user' className='user'/>
        </Link>
      </div>
      <nav className='nav-menu active'>
        <ul className='nav-menu-items'>
          <Link to='/dashboard' className='menu-bars'>
            <img src={Logo} alt="logo" />
            <p>Base</p>
          </Link>
          {SidebarData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`${item.cName} ${selectedOption === index ? 'active' : ''}`}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
