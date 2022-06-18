import React, {useEffect, useState} from "react";
import { getPosts, getTag, getAllTags, Post} from "../utils/API"

function BlogContainer() {

    // const [posts, setPosts] = useState()

    // useEffect( () => {
    //     getPosts().then( data => {
    //         setPosts(data)
    //     })
    // })


    return (
        <div className="min-h-screen">
            <section className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black rounded-xl shadow-lg max-w-3xl min-w-min">
                <h1>Test</h1>
            </section>
        </div>
    )
}

export default BlogContainer;