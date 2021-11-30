import React from "react";

// List is a placeholder. Use grid/flexbox to make each link a button with hover over functionality. 

function NavBar() {
    return (
        <div className="container mx-auto h-auto position: sticky top-0 bg-yellow-400">
            <p className="text-center text-3xl">Lost in Time</p>
            <div className="grid grid-cols-4 justify-center">
                <div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Home</div>
                <div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Blog</div>
                <div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">About</div>
                <div className="transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white text-center">Contact</div>

            </div>

        </div>
    )
}

export default NavBar
