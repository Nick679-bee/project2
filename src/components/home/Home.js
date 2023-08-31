import React from 'react'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import './home.css'

function Home() {
  return (
    <div className='home_section' id='section1'>

      <div className='left_home'>
        <h1>Fly with <span id='comfort'>Comfort</span> to <br/> Discover the <span id='world'>World</span> <IoPaperPlaneSharp id='paper_plane'/></h1>
        
      </div>

      <div className='right_home'>
        <div className='shapes shape1'></div>

        <div className='shapes shape2'></div>

        <div className='shapes shape3'></div>
      </div>

      <div className='scroll_icon_container'>
      <HiOutlineChevronDoubleDown id='scroll_down_icon'/>
      </div>

    </div>
  )
}

export default Home