import React from "react";
import Footer from "../../components/footer";
import LeadCard from "../../components/leadCard";
import Navbar from "../../components/navBar/navBar";
import "./home.css"

function Home() {
    return (
        <div id="home">
            <Navbar />
            <LeadCard />
            <Footer />
        </div>
    )
}

export default Home