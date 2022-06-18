import React from "react";
import ContactCard from "../../components/contactCard";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar/navBar";
import "./contact.css";


function Contact() {
    return (
        <div id="contact">
            <NavBar />
            <ContactCard/>
            <Footer />
        </div>
    )
};


export default Contact