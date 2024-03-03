import React from 'react'
import './Hamburger.css'



function Hamburger({btn}) {
 
  return (
    <>
    <div className='hamburger' onClick={btn}>
    <div className="container">  
  <input className="label-check" id="label-check" type="checkbox" />
  <label htmlFor="label-check" className="hamburger-label">
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
    <label /></label>
    </div></div>


    </>
  )
}

export default Hamburger
