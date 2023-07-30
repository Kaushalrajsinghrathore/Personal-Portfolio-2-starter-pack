import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'

const Header = () => {
  return (
    <div className={`paddings ${csswrapper}`}>
<div className={ ` flexCenter innerwidth  ${csscontainer}`}>
    <div className={cssname}>
        Kaushal
    </div>
    <ul>
    <li>  <a href=" ">Services</a>  </li>
    <li><a href=" ">Exprience</a>  </li>
    <li><a href=" ">Protfolio</a>  </li>
    <li><a href=" ">Testimonals</a>  </li>
    <li>
        
        <p> +123 456 789</p>
        <BiPhoneCall size={"40px"}/>

 </li>
    </ul>
   
</div>

    </div>

  )
}

export default Header
