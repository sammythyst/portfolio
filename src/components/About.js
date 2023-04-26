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
                    <h3>Hi, my name is Sam and I am a full stack web developer.</h3>
                    <p>My journey started in the Computer Graphics Technology program at Purdue University Northwest in the fall of 2016. I initially entered the program to follow a different path but soon found an appreciation and enjoyment for web development along the way.</p>
                    <p>Two years after graduating from Purdue, I decided to further my education after discovering a coding boot camp through Michigan State University (partnered with Trilogy Education Services, LLC). Throughout this program I was able to enhance my front-end coding skills and gain knowledge in back-end coding to be able to create full stack websites.</p>
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