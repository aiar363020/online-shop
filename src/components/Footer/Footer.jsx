import React from 'react'
import run from '../../assets/svg/run.svg'
import kod from '../../assets/svg/kod.svg'
import Play from '../../assets/svg/Play.svg'
import ww from '../../assets/svg/ww.svg'
import insta from '../../assets/svg/insta.svg'
import "./Footer.css"
function Footer() {
  return (
    <div className='rrr container'>
      <div className='Exclusive'>
      <h1>Exclusive</h1>
      <p>Subscribe</p>
      <p>Get 10% off your first order</p>
      <p>Enter your email</p>
      <img src={run} alt="" />
      </div>

      <div className='Support'>
        <h1>Support</h1>
        <p>111 Bijoy sarani, Dhaka, 
           </p>
           <p>

           DH 1515, Bangladesh.
           </p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className='Support'>
        <h1>My Account</h1>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>

      </div>

      <div className='Support'>
        <h1>Quick Link</h1>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className='Support'>
        <h1>Download App</h1>
        <p>Save $3 with App New User Only</p>
        <img src={kod} alt="" />
        <div>


        <img src={Play} alt="" />
        <img src={ww} alt="" />
        <img src={insta}alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
