import React from "react"
import Title from "./../common/title/Title";
import "./about.css";
import AWrapper from "./AWrapper";
import { homeAbout } from './../data/dummydata';



const AboutCard = () => {
  return (
    <div>
      <section className='aboutHome'>
        <div className='continer flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='item'>
              
              {homeAbout.map((val) => {
                return (
                  <div className='items flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
     <AWrapper />
    </div>
  )
}

export default AboutCard
