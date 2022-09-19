import React from "react";
import { Post } from "../utils/API";

function BlogCard(props: Post) {
    return (
        <div className="container">
            <div className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-black  shadow-lg max-w-3xl min-w-min">
                <div className="flex justify-center">
                    <h1 className="text-center text-lg text-white">{props.title}</h1>
                </div>
                <p className="text-white pt-4 pb-4 px-4">
                    {props.content}
                </p>
                <p className="text-slate-300 text-sm">Tags: {props.tags}</p>
            </div>
        </div>
    )
};


export default BlogCard;