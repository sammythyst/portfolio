import React from 'react';
import Contact from './Contact';

function About() {
    const dev = { 
        maxWidth: "450px",
        display: 'flex', 
        borderRadius: "50%",
        margin: "0px 50px"
    }


    return (
        <div className="m-5">
            <div className='d-md-flex'>
                <div>
                    <h3>Sam is a Web Developer with technical education from Purdue University Northwest and Michigan State University.</h3>
                    <p>They enrolled in the Computer Graphics Technology program at Purdue in the fall of 2016, graduating with a Bachelor's degree in May 2020. Then in the summer of 2022, they decided to further their coding education and enrolled in a Full Stack Coding Boot Camp through Michigan State, graduating from this program in March 2023.</p>
                </div>
                <div>
                    <img src={require('../images/avatar.png')} alt="Cartoon image of the developer." style={dev}/>
                </div>
            </div>
            
            <div>
                <Contact />
            </div>
        </div>
    );
}

export default About;