import React, { useState , useEffect } from "react";
import './style.scss'
import 'animate.css';
import homePic from '../../assests/images/Home-pic.jpg'
// import another from '../../assests/images/22062.jpg'
import AnimatedLetters from '../Animated/index'
export const Main=()=>{
    const [letterClass, setLetterClass] = useState('main-text');
    const titleArray=['T','h','e',' ','D','e','s','c','r','i','b','t','i','o','n'];
    const textArray=['D','e','t','a','i','l','s']
    
    useEffect(() => {
        let timeout;
      
        timeout = setTimeout(() => {
          setLetterClass("main-text-animate-hover");
        }, 4000);
      
        return () => {
          clearTimeout(timeout);
        };
      }, []);
    return(
        <div className="main-container">
            <div className="text-container">
              <h1>
              <AnimatedLetters
                    letterClass={letterClass}
                    strArray={titleArray}
                    idx={2}
                />
                <br/>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={textArray}
                    idx={10}
                />
              </h1>
              {/* <img src={another} className='homePic' /> */}
              <img src={homePic} className='homePic' />
            </div>
            
        </div>
    )
}