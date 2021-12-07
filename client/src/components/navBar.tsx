import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="container mx-auto h-auto position: sticky top-0 bg-yellow-400">
            <p className="text-center text-3xl">Lost in Time</p>
            <div className="grid grid-cols-4 justify-center">
                <Link to="/"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Home</div></Link>
                <Link to="/blog"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Blog</div></Link>
                <Link to="/about"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">About</div></Link>
                <Link to="/contact"><div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Contact</div></Link>

            </div>

        </div>
    )
}

export default NavBar
