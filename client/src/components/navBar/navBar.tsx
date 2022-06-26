import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"



function NavBar() {
    return (
        <nav className="container mx-auto h-auto position: sticky top-0 bg-yellow-500 drop-shadow-2xl border-b-4 border-black">
            <p className="text-center text-3xl font-cursive">Chasing Time</p>
            <div className="grid grid-cols-4 justify-center">
                <Link to="/"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center font-cursive">Home</div></Link>
                <Link to="/blog"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center font-cursive">Blog</div></Link>
                <Link to="/about"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center font-cursive">About</div></Link>
                <Link to="/contact"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center font-cursive">Contact</div></Link>

            </div>

        </nav>
    )
}

export default NavBar
