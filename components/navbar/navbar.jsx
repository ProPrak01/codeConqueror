import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from "../../assets/icon.svg"

const Menu = () =>(
  <>
  <p className='font_menu'>Home</p>
  <p className='font_menu'>About Us</p>
  <p className='font_menu'>Search</p>
 </>
)
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    // Prevent the default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img  src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
        < Menu />
        </div>

      </div>
      <div className='gpt3__navbar-sign'>
       
        <button type="button">Library</button>
      </div>
      <div className='gpt3__navbar-menu'>
      {toggleMenu
      ?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
      :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
      }
      {toggleMenu &&(
        <div className='gpt3__navbar-menu_container scale-up-center'>
        <div className='gpt3__navbar-menu_container-links'>

        < Menu />
        <div className='gpt3__navbar-menu_container-links-sign'>
       
        <button type="button">Library</button>
      </div>
        </div>
        </div>
      )}

      </div>
    </div>
  )
}

export default Navbar