import axios from "axios";

const getPosts = function() {
    return axios.get("/api/getPosts")
}

const getTag = function() {
    return axios.get("/api/getPosts/:tag")
}

export {getPosts, getTag} 