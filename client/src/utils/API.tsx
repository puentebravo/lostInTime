import axios from "axios";

const getPosts = function () {
    return axios.get("/api/getPosts")
}

const getTag = function () {
    return axios.get("/api/getPosts/:tag")
}

const getAllTags = function () {
    return axios.get("/api/getPosts/tags")
}

export { getPosts, getTag, getAllTags } 