import axios from "axios";

interface Post {
    ID: string,
    content: string,
    tags: string,
  }

const getPosts = function () {
    return axios.get<Post[]>("/api/getPosts")
}

const getTag = function () {
    return axios.get<Post[]>("/api/getPosts/:tag")
}

const getAllTags = function () {
    return axios.get("/api/getPosts/tags")
}

export { getPosts, getTag, getAllTags } 