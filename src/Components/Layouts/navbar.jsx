import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='menu'>
    <img src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp" alt="" />
        <button ><i class="fa-solid fa-bars"></i></button>
    </div>
    <header>
        <div className="nav-header">
            <div className='nav-txt'>
                <p>Visit Us</p>
                <p> Online Support</p>

            </div>
            <div className='nav-icons'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-basketball"></i>
            <i class="fa-solid fa-globe"></i>


            </div>


        </div>
        <nav>
            <img src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp" alt="" />
            <div className='links'>
                <NavLink to={"/"}><p>Home</p></NavLink>
                <NavLink to={"/about"}><p>About</p></NavLink>
                <p>Pages</p>
                <NavLink to={"/"}><p>Blog</p></NavLink>
                <NavLink to={"/contacts"}><p>Contact</p></NavLink>


            </div>


        </nav>



    </header>
    </>
  )
}

export default Navbar