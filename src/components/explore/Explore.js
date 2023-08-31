import React from 'react'
import './explore.css'
import uzbakistan from '../../images/uzbakistan.webp'
import mara from '../../images/mara.jpg'
// import istanbul from '../../images/istanbul01.jpeg'
import topkapi from '../../images/topkapi.webp'
import boraBora from '../../images/bora_bora.jpeg'

function Explore() {
  return (
    <div className='explore_section' id='section2' >
      
      <h2 id='explore-text'>Explore <br/> the <span id='beauty'>Beauty</span> of our <span id='planet'>Planet</span></h2>

      <div className='explore_cards_container'>

        <div className='explore_card'>
          <div className='card_img'>
            <img className='actual_image' src={mara} alt='uzbak'></img>
          </div>
          <div className='card_txt'>
            <p>Masai Mara <br/> southwestern, Kenya</p>
          </div>
        </div>

        <div className='explore_card'>
          <div className='card_img'>
            <img className='actual_image' src={topkapi} alt='topkapi'></img>
          </div>
          <div className='card_txt'>
            <p>Topkapi Palace<br/>Istanbul, Turkey</p>
          </div>
        </div>

        <div className='explore_card'>
          <div className='card_img'>
            <img className='actual_image' src={boraBora} alt='uzbak'></img>
          </div>
          <div className='card_txt'>
            <p>Bora Bora<br/>French Polynesia, France</p>
          </div>
        </div>

        <div className='explore_card'>
          <div className='card_img'>
            <img className='actual_image' src={uzbakistan} alt='uzbak'></img>
          </div>
          <div className='card_txt'>
            <p>Istanbul <br/> Turkey</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Explore