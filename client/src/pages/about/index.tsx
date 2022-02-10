import React from "react";
import AboutCard from "../../components/aboutCard";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import "./about.css"

function About() {
    return (
        <div id="about">
            <NavBar />
            <AboutCard />
            <Footer />
        </div>
    )
}

export default About