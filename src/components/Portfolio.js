import React from 'react';
import { BsGithub } from 'react-icons/bs';


function Portfolio() {
    const img = { 
        maxWidth: "450px",
        display: "flex"
    }

    const links = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "space-between"
    }

    const project = {
        maxWidth: "450px",
        margin: "35px"
    }


    return (
        <div className='m-5'>
            <section className='justify-content-center d-flex flex-wrap'>
                <div style={project}>
                    <div style={links}>
                        <a href="https://mediaphile.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h5>MediaPhile</h5></a>
                        <a href="https://github.com/sammythyst/media-phile" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>A microblog for artists and art lovers to share, view, and appreciate art.</p>
                    <p>Tools: Node.js, Express.js, Handlebars.js, MySQL</p>
                    <img src={require('../images/media-phile.png')} alt="media phile homepage with a couple posts from various users." style={img}/>
                </div>
                <div style={project}>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/college-trip/" target="_blank" rel="noopener noreferrer"><h5>College Trip Planner</h5></a>
                        <a href="https://github.com/sammythyst/college-trip" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Find information on universities and colleges by name and discover local weather data.</p>
                    <p>Tools: HTML, CSS, JavaScript, Bootstrap 5, jQuery, APIs</p>
                    <img src={require('../images/college-trip.png')} alt="webpage listing various colleges based on search term" style={img}/>
                </div>
                <div style={project}>
                    <div style={links}>
                        <a href="https://re-tcg.com/home.html" target="_blank" rel="noopener noreferrer"><h5>The Random Encounters Trading Card Game</h5></a>
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a> */}
                    </div>
                    <p>A database website collecting known trading cards from the YouTube musical group, Random Encounters.</p>
                    <p>Tools: HTML, CSS, JavaScript, JSON</p>
                    <img src={require('../images/re-tcg.png')} alt="pokemon-like cards on a red and black starburst background" style={img}/>
                </div>
                {/* module 18 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://drive.google.com/file/d/1V6boYwXmaUKc6MbCDFlly376WQVBu1YU/view"target="_blank" rel="noopener noreferrer"><h5>Social Network API</h5></a>
                        <a href="https://github.com/sammythyst/social-network-api" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Backend of a social network directory where users can create new accounts, find and add friends, and share and react to thoughts.</p>
                    <p>Tools: Express.js, Mongoose, Moment</p>
                    <img src={require('../images/social-network-api.png')} alt="backend view of a social network's api" style={img}/>
                </div>
                {/* module 13 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://drive.google.com/file/d/1-oPGDNFI5SXhxck3-j77Ifq4xl9zIWS7/view" target="_blank" rel="noopener noreferrer"><h5>Ecommerce Backend</h5></a>
                        <a href="https://github.com/sammythyst/ecommerce-back-end" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>E-commerce database displaying various products and categories belonging to the store.</p>
                    <p>Tools: Express.js, MySQL2, Sequelize, Dotenv</p>
                    <img src={require('../images/ecommerce-backend.png')} alt="backend view of ecommerce store" style={img}/>
                </div>
                {/* module 12 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://drive.google.com/file/d/1TCa1qN8qcUkPvxT3iuowYtNA8l78Iu2P/view" target="_blank" rel="noopener noreferrer" ><h5>Employee Tracker</h5></a>
                        <a href="https://github.com/sammythyst/employee-tracker" target="_blank" rel="noopener noreferrer" ><BsGithub size={25}/></a>
                    </div>
                    <p>A command line application to view, add, and update the departments, employees, and employee roles within a company.</p>
                    <p>Tools: Node.js, Inquirer, MySQL</p>
                    <img src={require('../images/employee-tracker.png')} alt="a command line application of a company database" style={img}/>
                </div>
                 {/* module 10 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://drive.google.com/file/d/1rG4XwyyYu16q0Fzu6AZe_U5QIFOrtBj9/view" target="_blank" rel="noopener noreferrer"><h5>Team Profile</h5></a>
                        <a href="https://github.com/sammythyst/team-profile" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Terminal application to allow teams to add employees based on their position.</p>
                    <p>Tools: Inquirer</p>
                    <img src={require('../images/team-profile.png')} alt="cards displaying names and information of various employees" style={img}/>
                </div>
                {/* module 6 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer"><h5>Weather Dashboard</h5></a>
                        <a href="https://github.com/sammythyst/weather-dashboard" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Search for a city and discover its weather forecast.</p>
                    <p>Tools: HTML, CSS, JavaScript, API</p>
                    <img src={require('../images/weather-dashboard.png')} alt="a weather dashboard for Chicago with a 5 day forecast" style={img}/>
                </div>
                {/* module 5 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer"><h5>Work Day Scheduler</h5></a>
                        <a href="https://github.com/sammythyst/work-day-scheduler" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Plan your day in an hour-by-hour format.</p>
                    <p>Tools: HTML, CSS, JavaScript</p>
                    <img src={require('../images/work-day-scheduler.png')} alt="a vertically aligned time table starting with 9am and repeating every hour until 5pm, past hours are colored gray, the current hour is colored red, and future hours are colored green" style={img}/>
                </div>
                {/* module 4 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/code-quiz/" target="_blank" rel="noopener noreferrer"><h5>Code Quiz</h5></a>
                        <a href="https://github.com/sammythyst/code-quiz" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Test your coding knowledge with this quiz.</p>
                    <p>Tools: HTML, CSS, JavaScript</p>
                    <img src={require('../images/code-quiz.png')} alt="text reading Coding Quiz Challenge with a blue start quiz button" style={img}/>
                </div>
                {/* module 3 */}
                <div style={project}>
                    <div style={links}>
                        <a href="https://sammythyst.github.io/password-generator/" target="_blank" rel="noopener noreferrer"><h5>Password Generator</h5></a>
                        <a href="https://github.com/sammythyst/password-generator" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a>
                    </div>
                    <p>Generate a uniquely random password with a few simple questions.</p>
                    <p>Tools: HTML, CSS, JavaScript</p>
                    <img src={require('../images/password-generator.png')} alt="text box on white background with red button to generate a password" style={img}/>
                </div>
                
            </section>
        </div>
    );
}

export default Portfolio;