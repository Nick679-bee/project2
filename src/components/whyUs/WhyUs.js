import React from 'react'
import { GiSevenPointedStar } from 'react-icons/gi'
import './whyus.css'

function WhyUs() {
  return (
    <section className='why_us_section'>
        <div className='why_us_contaoner'>
            <h4>Why choose us</h4><hr/>
            <div className='why_divs'>
                <div>
                    <GiSevenPointedStar className='star' />
                    <h5>Our Experience</h5>
                    <div className='why_text'>
                    <p>Having an Experience in one of the main things that a company can have, Comfort Airline has been working for over 35 years.</p>
                    </div>
                </div><hr/>
                <div>
                    <GiSevenPointedStar className='star' />
                    <h5>We Care</h5>
                    <div className='why_text'>
                    <p>Our Customers safety in our number one priorty, including his Luggages. </p>
                    </div>
                </div><hr/>
                <div>
                    <GiSevenPointedStar className='star' />
                    <h5>Comfortable</h5>
                    <div className='why_text'>
                    <p>Comfort Airlines is the most Comfortable planes with the best Seats in the entire World. </p>
                    </div>
                </div><hr/>
                <div>
                    <GiSevenPointedStar className='star' />
                    <h5>Private</h5>
                    <div className='why_text'>
                    <p>Looking for a Private jet, Comfort Airlines provides you high quality Private Jet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs