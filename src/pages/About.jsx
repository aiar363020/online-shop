import React from 'react'
import text from '.././/assets/svg/text.svg'
import shoping from '../assets/image/shoping.png'
// import sallers from '.././assets/image/sallers.png'
import Mopnthly from '../assets/image/Mopnthly.png'
import Customer from '../assets/image/Customer.png'
import Anual from '../assets/image/Anual.png'
import men from '../assets/image/men.png'
import women from '../assets/image/women.png'
import www from '../assets/image/www.png'
import fooo from '../../src/assets/svg/fooo.svg'
import './About.scss'
function About() {
  return (
    <div>
      <div className='text'>
      <img src={text} alt="" />
      </div>
      <div className='bii'>
        <h1 className='foks'>Our Story</h1>
        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping
             </p>
             <p>
           makterplace with an active presense in Bangladesh. Supported 
             </p>
             <p>
           by wide range of tailored marketing, data and service solutions, 
             </p>
             <p>
           Exclusive has 10,500 sallers and 300 brands and serves 3
             </p>
             <p>
            millioons customers across the region.
             </p>
        
      </div>
      <div className='buu'>
        <p>Exclusive has more than 1 Million products to offer, growing at a
           </p>
           <p>
           very fast. Exclusive offers a diverse assotment in categories 
           </p>
           <p>
           ranging  from consumer.
           </p>
        <img className='shoping' src={shoping} alt="" />
      </div>
      <div className='flo'>
        <img src="" alt="" />
        <img src={Mopnthly} alt="" />
        <img src={Customer} alt="" />
        <img src={Anual} alt="" />
      </div>
      <div className='wewe'>
        <img className='wew' src={men} alt="" />
        <h1>Tom Cruise</h1>
        <p>Founder & Chairman</p>
        <img src={fooo} alt="" />
      </div>
      <div className='wewe'>
        <img className='wew' src={women} alt="" />
        <h1>Emma Watson</h1>
        <p>Managing Director</p>
        <img src={fooo} alt="" />
      </div>
      <div className='wewe'>
        <img className='wew' src={www} alt="" />
        <h1>Will Smith</h1>
        <p>Product Designer</p>
        <img src={fooo} alt="" />
      </div>
    </div>
  )
}

export default About
