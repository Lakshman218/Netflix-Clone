import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <h2 className='email_title'>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className='email_box'>
          <input className='footer_input' type="text" placeholder='Email Address' />
          <button className='footer_button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
