import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { IoIosMoon } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './navbar.css'



function NavBar() {

  const homePage = document.getElementById('section1')
  const indicate = document.getElementById('indicator')
  const body = document.querySelector('body')
  const menuBox = document.getElementById('menu_box')
  const navLink = document.querySelector('.nav_links')
  const explorePage = document.getElementById('section2')
  const bookPage = document.getElementById('section3')
  const aboutPage = document.getElementById('section4')



  const shake = () => {
    const homePage = document.getElementById('section1')
    homePage.scrollIntoView({behavior: 'smooth', block: 'end'})
  }


  const themeChanger = () => {
    const indicate = document.getElementById('indicator')
    const body = document.querySelector('body')
    indicate.classList.toggle('dark')
    body.classList.toggle('dark')
  }

  const menu = () => {
    const menuBox = document.getElementById('menu_box')
    const navLink = document.querySelector('.nav_links')
    menuBox.classList.toggle('clicked')
    navLink.classList.toggle('show')
  }

  const link = () => {
    const menuBox = document.getElementById('menu_box')
    const navLink = document.querySelector('.nav_links')

    setTimeout(() => {
        menuBox.classList.remove('clicked')
        navLink.classList.remove('show')

    }, 100);
  }

  const home = () => {
    const homePage = document.getElementById('section1')
     const navBar = document.querySelector('.nav_links')
    homePage.scrollIntoView({behavior: 'smooth', block: 'end'})
     navBar.classList.remove('ticket')
  }

  const explore = () => {
    const explorePage = document.getElementById('section2')
    explorePage.scrollIntoView({behavior: 'smooth', inline: 'start'})
  }

  const book = () => {
    const bookPage = document.getElementById('section3')
    bookPage.scrollIntoView({behavior: 'smooth', block: 'end'})
  }

  const about = () => {
    const aboutPage = document.getElementById('section4')
    aboutPage.scrollIntoView({behavior: 'smooth', block: 'end'})
  }

   if (window.location.pathname==="/home"){
     alert("Home Page")
     console.log('home');
   }else if (window.location.pathname==="/ticket"){

   }


  const ticket = () => {
    const navBar = document.querySelector('.nav_links')
    navBar.classList.add('ticket')
  }

  const main = () => {
    const navBar = document.querySelector('.nav_links')
    navBar.classList.remove('ticket')
  }

  


  return (
    <nav>

      <div className='left_nav'>
        <p id='logo' className='' onClick={shake}>Comfort</p>
      </div>

      <div className='right_nav'>
        <div className='nav_links'>
          <ul>
            <li section = 'section1' className='links' onClick={ () => { home(); link();}} id='home'><Link to='/'>Home</Link></li>
            <li section = 'section2' className='links' onClick={ () => { explore(); link();}} id='explore'>Explore</li>
            <li section = 'section3' className='links' onClick={ () => { book(); link();}} id='book'>Book</li>
            <li><Link to='/' onClick={main}>Main</Link></li>
            <li id=''><Link to='/ticket' onClick={ticket}>Ticket</Link></li>
            <li section = 'section4' className='links' onClick={ () => { about(); link();}} id='contact'>About</li>
            <li><Link to='/admin'>Admin</Link></li>
           
          </ul>
        </div>

        <div className='theme_container' onClick={themeChanger}>
          <BsFillSunFill id='sun'/>
          <i id='indicator'></i>
          <IoIosMoon id='moon'/>
        </div>

        <div id='menu_box' onClick={menu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>

    </nav>
  )
}

export default NavBar