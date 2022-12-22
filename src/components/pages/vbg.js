import React from 'react'
import videoBg from '../../assets/amrita.mp4'
import '../pages/vbg.css'

export default function Vbg(){
  return (
    <div className='vbg'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted id="myVideo"/>
    </div>
  )
}

