import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';

function About() {
    const footer = {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "var(--accent)",
        display: "flex",
        justifyContent: "center"
    }

    const icons = {
        margin: "20px 30px"
    }

    return (
        <div style={footer}>
            <a href="https://github.com/sammythyst" target="_blank" rel="noopener noreferrer"><BsGithub size={40} style={icons}/></a>
            <a href="https://www.linkedin.com/in/sam-bensema-a5a654264/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={40} style={icons}/></a>
            <a href="https://stackoverflow.com/users/21236524/sammythyst" target="_blank" rel="noopener noreferrer"><BsStackOverflow size={40} style={icons}/></a>
        </div>
    );
}

export default About;