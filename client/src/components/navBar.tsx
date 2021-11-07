import React from "react";

// List is a placeholder. Use grid/flexbox to make each link a button with hover over functionality. 

function NavBar() {
    return (
        <div className="container mx-auto h-auto position: sticky top-0 bg-gray-700">
            <p className="text-center text-gray-300">Placeholder Title</p>
            <ul className="text-center text-gray-300 list-none">
                <li >Home</li>
                <li >About</li>
                <li >Blog</li>
                <li >Contact</li>
            </ul>

        </div>
    )
}

export default NavBar
