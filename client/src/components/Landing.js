import React from 'react';
import emailyLogo from './../emaily-logo.png'
import dataCollectImage from './../data-collect.jpeg'
import './Landing.css'

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className="col">
                <div className="row">
                    <img src={ emailyLogo } alt="emaily logo"></img>
                </div>
                <div className="row">
                    <img src={ dataCollectImage } alt="data collection"></img>
                </div>
                <div className="row landing-text">Collect feedback from your users</div>
                <div className="row landing-text-sub">And know how to improve their experience</div>
            </div>
            
        </div>
    )
}

export default Landing;