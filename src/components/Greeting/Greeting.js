import React, { useState, useEffect } from 'react';
import hombre from "../../images/hombre.png";

export default function Greeting() {
  const [greeting, setGreeting] = useState('Hey, my name is <span class="color2">Manuel</span>');

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(prevGreeting =>
        prevGreeting === 'Hey, my name is <span class="color2">Manuel</span>'
          ? 'Hey, you can call me <span class="color2">Wahandri</span>'
          : 'Hey, my name is <span class="color2">Manuel</span>'
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flexCenter'>
      <div className='hello'>
        <h1 dangerouslySetInnerHTML={{ __html: greeting }} />
        <h1>I am  <span className='color2'>Web Developer</span></h1>
        <h3>
          My name is Manuel Garcia, I am a curious developer, <br/>
          in love with life in love with everything, <br/>
          The casing came out wrong but the intention is not to look at it <br/>
          the teeth to the straw in hand
        </h3>
      </div>
      <img className='imgHombre' src={hombre} alt=''/>
    </div>
  )
}