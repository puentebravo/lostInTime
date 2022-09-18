import axios from "axios";


interface Post {
    ID: string,
    title: string
    content: string,
    tags: string,
}

const getPosts = async function () {
    const response = await axios.get<Post[]>("/api/getPosts")
    return response
}

const getTag = function () {
    return axios.get("/api/getPosts/:tag")
}

const getAllTags = function () {
    return axios.get("/api/getPosts/tags")
}

export { getPosts, getTag, getAllTags }
export type { Post }