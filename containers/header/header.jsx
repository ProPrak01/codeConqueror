import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Spline from '@splinetool/react-spline';

const header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">

      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>One and Only <br/>PhotoPedia</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Type your imagination here'></input>
          <button type='button'>Search Photos</button> 
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt= 'people'/>
          <p style={{color:"#ffffff", fontSize:"0.9rem"}}>1,600 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
      <Spline scene="https://prod.spline.design/SVDsscuulnP10g0r/scene.splinecode" />


          {/* <img src={ai} alt='ai'/> */}
        </div>
    </div>
  )
}

export default header