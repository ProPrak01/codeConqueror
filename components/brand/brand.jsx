import React from 'react'
import './brand.css'
import {google, slack, atlassian, dropbox, shopify,interiit,iitm} from './imports.js'
const Brand = () => {
  return (
    <div className='gpt3__brand selection__padding'>
    <div>
    <img className='iitm' height={60} width={100} src={iitm} alt="google"/>
    </div>
    <div>
    <img className='interiit' height={60} width={60} src={interiit} alt="slack"/>
    </div>
    <div>
    <img src={atlassian} alt="atlassian"/>
    </div>
    <div>
    <img src={dropbox} alt="dropbox"/>
    </div>
    <div>
    <img src={shopify} alt="shopify"/>
    </div>
    </div>
  )
}

export default Brand