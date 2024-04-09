import React,{ useState } from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Spline from '@splinetool/react-spline';

const header = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000); // Stop the animation after 2 seconds
  };

  
  return (
    <div className='gpt3__header section__padding' id="home">

      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>One and Only <br/>PhotoPedia</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' className={animate ? 'rainbow-border' : ''} placeholder='Type your imagination here'></input>
       
          <button onClick={handleClick} type='button'>Search Photos</button> 
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt= 'people'/>
          <p style={{color:"#ffffff", fontSize:"0.9rem"}}>16 iitians have visited in last 24 hours to copy😁</p>
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