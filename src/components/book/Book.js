import React, { useState } from 'react'
// import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import './book.css'

function Book() {

  const pageOne = document.getElementById('pageOne')
  const pageTwo = document.getElementById('pageTwo')
  const pageThree = document.getElementById('pageThree')
  const pageFour = document.getElementById('pageFour')
  const bookingForm = document.querySelector('.booking_form')
  // const wrapperOne = document.getElementById('wrapper_one')

  const depInput = document.getElementById('depInput')
  const desInput = document.getElementById('desInput')

  const firsName = document.getElementById('firstName')
  const middleName = document.getElementById('middleName')
  const lastName = document.getElementById('lastName')

  const nationality = document.getElementById('nationality')
  const gender = document.getElementById('gender')
  const title = document.getElementById('title')
  const age = document.getElementById('age')

  const depDate = document.getElementById('depDate')

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [PersonNationality, setNationality] = useState('');
  const [what_gender, setGender] = useState('');
  const [personTitle, setPersonTitle] = useState('');
  const [personAge, setPersonAge] = useState('');
  const [departure_date, setDepartureDate] = useState('');
  const [return_date, setReturnDate] = useState('');

  const nextOne = () => {
    if (depInput.value.length <= 2 || desInput.value.length <= 2 ) {
      alert("Input fields can't be less than 3 latters")
    }else {
      pageOne.style.left = '-500px'
      pageTwo.style.left = '0'
      bookingForm.style.height = '500px'
    }
  }

  const prevOne = () => {
    pageOne.style.left = '0'
    pageTwo.style.left = '500px'
    bookingForm.style.height = '415px'
  }

  const nextTwo = () => {
   
    if (firsName.value.length <= 2 || middleName.value.length <= 2 || lastName.value.length <= 2 ) {
      alert("Input fields can't be less than 3 latters")
    }else {
      pageTwo.style.left = '-500px'
      pageThree.style.left = '0'
      bookingForm.style.height = '400px'
    }
  }

  const prevTwo = () => {
    pageTwo.style.left = '0'
    pageThree.style.left = '500px'
    bookingForm.style.height = '500px'
  }

  const nextThree = () => {
    
    if (nationality.value !== 'Nationality' && gender.value !== 'Gender' && title.vale !== 'Titlt' && age.value > 0) {
      pageThree.style.left = '-500px'
      pageFour.style.left = '0'
      bookingForm.style.height = '415px'
    }else {
      alert('Fill the fields with Correct answer')
    }
  }

  const prevThree = () => {
    pageThree.style.left = '0'
    pageFour.style.left = '500px'
    bookingForm.style.height = '400px'
  };

  const handleSubmit = (e) => {
     const user = {
      departure,
      destination, 
      first_name, 
      middle_name, 
      last_name, 
      nationality: PersonNationality, 
      gender: what_gender, 
      title: personTitle, 
      age: personAge, 
      departure_date, 
      return_date
    }

    fetch('https://airline-app.onrender.com/booking', {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(user)
      })
      e.preventDefault();
  }
  
  

  return (
    <div className='book_section' id='section3' >
      
      <h2 id='booking_title'>Your next adventure<br/> is just <span>Clicks</span> a way</h2>

        <form className='booking_form' onSubmit={handleSubmit}>

          <h3 id='form_big_title'>Flight Booking</h3>
          <hr id='form_hor'/>

          <div id='page_wrapper'>

          <div className='page' id='pageOne'>
            <div className='page_title'>
              Destination info :
            </div>
            <div className='form_field'>
              <label>Departure</label>
              <input id='depInput' type='text'  value={departure} onChange={(e) => setDeparture(e.target.value)}/>
            </div>
            <div className='form_field'>
              <label>Destination</label>
              <input id='desInput' type='text'  value={destination} onChange={(e) => setDestination(e.target.value)}/>
            </div>
            <div className='button_field'>
              <button type='button' onClick={nextOne} id='next1' >Continue</button>
            </div>
          </div>

          <div className='page' id='pageTwo'>
            <div className='page_title'>
              Passenger Info :
            </div>
            <div className='form_field'>
              <label>First Name</label>
              <input id='firstName' type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='form_field'>
              <label>Middle Name</label>
              <input id='middleName' type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className='form_field'>
              <label>Last Name</label>
              <input id='lastName' type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='button_field'>
              <button type='button' id='prev1' onClick={prevOne} >Previous</button>
              <button type='button' id='next2' onClick={nextTwo} >Continue</button>
            </div>
          </div>

          <div className='page'  id='pageThree'>
            <div className='page_title'>
              More Info :
            </div>

            <div className='row_1'>
              <div className='container'>
                <select id='nationality' defaultValue={'Nationality'} value={PersonNationality} onChange={(e) => setNationality(e.target.value)}>
                  <option disabled value="Nationality" >Nationality</option>
                  <option>Afghan</option>
                  <option>Albanian</option>
                  <option>Algerian</option>
                  <option>American</option>
                  <option>Andorran</option>
                  <option>Angolan</option>
                  <option>Somali</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
              <div className='container'>
                <select id='gender' defaultValue={'Gender'} value={what_gender} onChange={(e) => setGender(e.target.value)} >
                  <option disabled value="Gender" >Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
            </div>

            <div className='row_2'>
            <div className='container'>
                <select id='title' defaultValue={'Title'} value={personTitle} onChange={(e) => setPersonTitle(e.target.value)} >
                  <option disabled vale="Title" >Title</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                  <option>kid</option>
                </select>
                <BsChevronDown id='dropDown'/>
              </div>
             <div className='form_field'>
              <label>Age</label>
              <input id='age' type='number' value={personAge} onChange={(e) => setPersonAge(e.target.value)} />
            </div>
            </div>

            <div className='button_field'>
              <button type='button' id='prev2' onClick={prevTwo} >Previous</button>
              <button type='button' id='next3' onClick={nextThree}  >Continue</button>
            </div>
          </div>

          <div className='page' id='pageFour'>
            <div className='page_title'>
              Date :
            </div>
            <div className='form_field'>
              <label>Departure Date</label>
              <input id='depDate' type='date' value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} />
            </div>
            <div className='form_field'>
              <label>Return Date</label>
              <input type='date' value={return_date} onChange={(e) => setReturnDate(e.target.value)} />
            </div>
            <div className='button_field'>
            <button type='button' id='prev2' onClick={prevThree} >Previous</button>
              <button type='submit' id='submit' >Continue</button>
            </div>
          </div>

          </div>

        </form>

      {/* </div> */}

    </div>
  )
}

export default Book