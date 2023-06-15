import React from 'react'
import { pageLinks } from '../data'

const PageLinks = () => {

  return (
    <ul className='nav-links' id='nav-links'>
    {/* {pageLinks.map((link)=>{
      return (
        <li id={link.id}>
        <a href={link.href} className='nav-link'>
         {link.text}
        </a>
      </li>
    )
    })} */}
    {pageLinks.map((link)=>{
const {id,href,text}=link;
return(
<li key={id}>
        <a href={href} className='nav-link'>
         {text}
        </a>
      </li>
)
})}</ul>
  )
}

export default PageLinks