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
                    <h3>Sam is a Web Developer with technical education from Purdue University Northwest and Michigan State University.</h3>
                    <p>They enrolled in the Computer Graphics Technology program at Purdue in the fall of 2016, graduating with a Bachelor's degree in May 2020. Then in the summer of 2022, they decided to further their coding education and enrolled in a Full Stack Coding Boot Camp through Michigan State, graduating from this program in March 2023.</p>
                    
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={require('../images/avatar.png')} alt="Cartoon depiction of the developer." style={dev}/>
                </div>
            </div>
            
            <div className='px-4'>
                <Contact />
            </div>
        </div>
    );
}

export default About;