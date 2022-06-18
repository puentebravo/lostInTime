import React from "react"
import BlogContainer from "../../components/blogContainer"
import Footer from "../../components/footer"
import NavBar from "../../components/navBar/navBar"

// For this page, you'll need to track state in at least one component, if not more. Things you'll need: 
// a container to actually hold the blog posts. 
// A vertical navigation menu for posts. 
// (maybe) A row of tags. Users can click on a tag button, and be presented with all posts filed under that tag.
// You'll also need a utils page for axios calls to your backend API. 



function Blog() {
    return (
        <div>
            <NavBar />
            <BlogContainer />
            <Footer />
        </div>
    )
}

export default Blog

