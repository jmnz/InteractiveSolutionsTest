import React from 'react'
import './infoView.scss'
import profilePic from '../assets/profilePic.jpg'

export const InfoView = () => (
  <div>
    <img src={profilePic} alt='this is me' className='profilePic' />
    <h1>Jesús Alejandro Jiménez </h1>
    <h3>Software Developer</h3>
    <p>Sex Male | Date of birth 11 Jun 1994 | Nationality Venezuelan
    <br />
    tlf: (+58) 416 582 0481
    <br />
    Mail: jesusjimenez@edgysoft.com.ve
    <br />
    Skype: edgysoft
    <br />
    web: <a href='http://www.edgysoft.com.ve'>edgysoft.com.ve</a>
      <br />
    linkedIn: <a href='http://www.linkedin.com/in/jimenezalejandrojesus'>/in/jimenezalejandrojesus</a>
    </p>
  </div>
)

export default InfoView
