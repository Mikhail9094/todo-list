import axios from "axios";
import { type } from "os";
import { MainParameters } from "../types";

const FIRST_API_URL = "http://localhost:3000";

export const getPosts = async () => {
  
    const res = await axios({
      url: `${FIRST_API_URL}/posts`,
      method: "GET",
    })
    return res.data
 
  
};

export const createPosts = async (item: MainParameters) => {
  const res = await axios.post(`${FIRST_API_URL}/posts`, item);
};

export const deletePosts = async (id: string) => {
    const res = await axios.delete(`${FIRST_API_URL}/posts/${id}`)
  };

  export const changePosts = async (item: MainParameters) => {
    const res = await axios
                            .put(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
                                name: item.name,
                                completed: item.completed,
                            })
  };

  