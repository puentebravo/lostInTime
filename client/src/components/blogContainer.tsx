import React, {useEffect, useState} from "react";
import {Post} from "../utils/API"
import BlogCard from "./blogCard";
import axios from "axios";

function BlogContainer() {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect( () => {
        axios.get<Post[]>("/api/getPosts").then( response => {
            setPosts(response.data)
        })
    }, [])


    return (
        <div className="min-h-screen">
            <section className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black rounded-xl shadow-lg max-w-3xl min-w-min">
                {posts.map((post) => (
                    <div key={post.ID}>
                    <BlogCard ID={post.ID} title={post.title} content={post.content} tags={post.tags} />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default BlogContainer;