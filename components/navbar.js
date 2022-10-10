import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function Header() {
  return (
   <navbar className='flex flex-row items-center justify-between bg-black navbar'>
    <div >
      <img src='./logo.svg' className='logo'/>
    </div>
    <div className='flex flex-row items-center justify-end'>
      <ul className='flex flex-row mr-10'>
        <li className='pr-6'>ABOUT </li>
        <li className='pr-6'>DISCOVER</li>
        <li className='pr-6'>MEMBERS PLAN</li>
        <li className='pr-6'>CONTACT US</li>
        <li className='pr-6'>BECOME A PARTNAER</li>
      </ul>
      <button className=".login_button_nav" >LOG IN</button>
    </div>
   </navbar>
  )
}
