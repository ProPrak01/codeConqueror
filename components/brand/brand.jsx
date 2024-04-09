import React from 'react'
import './brand.css'
import { webops,interiit,iitm} from './imports.js'

const Brand = () => {
  return (
    <div className='gpt3__brand selection__padding'>
    <div>
    <img className='iitm' height={60} width={100} src={iitm} alt="google"/>
    </div>
    <div>
    <img className='interiit' height={60} width={60} src={interiit} alt="interiit"/>
    </div>
    <div>
    <img className='interiit' height={70} width={70} src={webops} alt="weboops"/>
    </div>
    
    </div>
  )
}

export default Brand