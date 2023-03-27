import React from 'react';
import { BsGithub } from 'react-icons/bs';


function Portfolio() {
    const img = { 
        maxWidth: "450px",
        margin: "0px 20px 75px",
        display: "flex"
    }

    const links = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-evenly"
    }


    return (
        <div className='m-5'>
            <section className='justify-content-center d-flex flex-wrap'>
                <div>
                    <div style={links}>
                        <a href="https://mediaphile.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>MediaPhile</p></a>
                        <a href="https://github.com/sammythyst/media-phile" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/media-phile.png')} alt="media phile homepage with a couple posts from various users." style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/college-trip/" target="_blank" rel="noopener noreferrer"><p>College Trip Planner</p></a>
                        <a href="https://github.com/sammythyst/college-trip" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/college-trip.png')} alt="webpage listing various colleges based on search term" style={img}/>
                </div>
                <div>
                    <div style={links}>
                        <a href="https://re-tcg.com/home.html" target="_blank" rel="noopener noreferrer"><p>The Random Encounters Trading Card Game</p></a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a> */}
                    </div>
                    <img src={require('../images/re-tcg.png')} alt="pokemon-like cards on a red and black starburst background" style={img}/>
                </div>
                 {/* module 10 */}
                 <div>
                    <div style={links}>
                        <p>Team Profile</p>
                        <a href="https://github.com/sammythyst/team-profile" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/team-profile.png')} alt="cards displaying names and information of various employees" style={img}/>
                </div>
                {/* module 6 */}
                <div>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><p>Weather Dashboard</p></a>
                        <a href="https://github.com/sammythyst/weather-dashboard" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/weather-dashboard.png')} alt="a weather dashboard for Chicago with a 5 day forecast" style={img}/>
                </div>
                {/* module 5 */}
                <div>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer"><p>Work Day Scheduler</p></a>
                        <a href="https://github.com/sammythyst/work-day-scheduler" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/work-day-scheduler.png')} alt="a vertically aligned time table starting with 9am and repeating every hour until 5pm, past hours are colored gray, the current hour is colored red, and future hours are colored green" style={img}/>
                </div>
                {/* module 4 */}
                <div>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/code-quiz/" target="_blank" rel="noopener noreferrer"><p>Code Quiz</p></a>
                        <a href="https://github.com/sammythyst/code-quiz" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/code-quiz.png')} alt="text reading Coding Quiz Challenge with a blue start quiz button" style={img}/>
                </div>
                {/* module 3 */}
                <div>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/password-generator/" target="_blank" rel="noopener noreferrer"><p>Password Generator</p></a>
                        <a href="https://github.com/sammythyst/password-generator" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <img src={require('../images/password-generator.png')} alt="text box on white background with red button to generate a password" style={img}/>
                </div>
                
            </section>
        </div>
    );
}

export default Portfolio;