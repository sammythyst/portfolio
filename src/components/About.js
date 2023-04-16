import React from 'react';
import Contact from './Contact';

function About() {
    const dev = { 
        maxWidth: "350px",
        maxHeight: "350px",
        display: 'flex', 
        borderRadius: "50%",
        margin: "0px 50px"
    }


    return (
        <div className="m-5">
            <div className='d-md-flex px-4'>
                <div>
                    <h3>Hi, my name is Sam and I am a <span style={{fontSize: '37px'}}>full stack web developer</span>.</h3>
                    <p>My journey started in the Computer Graphics Technology program at Purdue University Northwest in the fall of 2016. I initially entered the program to follow a different path but soon found an appreciation and enjoyment for web development along the way.</p>
                    <p>Two years after graduating from Purdue, I decided to further my education after discovering a coding boot camp through Michigan State University (partnered with Trilogy Education Services, LLC). This program began in September 2022 and concluded in March 2023.</p>
                    <p>The reason I enjoy coding is because I view it as a puzzle. I have all the pieces and my problem-solving nature wants to put those pieces together to create a one-of-a-kind final picture.</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={require('../images/avatar.png')} alt="A cartoon depiction of Sam with shoulder length blonde hair. They are wearing a black and white striped shirt with a gray cardigan and a black beanie." style={dev}/>
                </div>
            </div>
            
            <div className='px-4'>
                <Contact />
            </div>
        </div>
    );
}

export default About;