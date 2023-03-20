import React from 'react';
import { BsGithub } from 'react-icons/bs';


function Portfolio() {
    const img = { 
        maxWidth: "500px",
        margin: "0px 20px 75px",
        display: "flex",
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
                        {/* pre-bootcamp so no github, planning to rebuild using github soon */}
                        {/* <a href="" target="_blank" rel="noopener noreferrer"><BsGithub size={25}/></a> */}
                    </div>
                    <img src={require('../images/re-tcg.png')} alt="pokemon-like cards on a red and black starburst background" style={img}/>
                </div>
                
                
            </section>
        </div>
    );
}

export default Portfolio;