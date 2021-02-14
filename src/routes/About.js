import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about_container">
            <span>
                Hello I love movie, welcome to my movie app web page. Hope you enjoy website
            </span>
            <span>-- Murakami Haruki, 1984</span>
        </div>
    );
}

export default About;