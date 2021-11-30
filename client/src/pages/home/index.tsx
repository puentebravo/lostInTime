import React from "react";
import Footer from "../../components/footer";
import LeadCard from "../../components/leadCard";
import Navbar from "../../components/navBar";

function Home() {
    return (
        <div>
            <Navbar />
            <LeadCard />
            <Footer />
        </div>
    )
}

export default Home