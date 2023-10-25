import axios from "axios";

// const API = axios.create({baseURL:'http://localhost:5000/'})
const API = axios.create({baseURL:'https://moments-backend.vercel.app'})


export const fetchPosts =()=> API.get('/posts');
export const createPost =(newPost)=>API.post('/posts',newPost);
export const updatePost = (id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost);
export const deletePost =(id)=>API.delete(`/posts/${id}`);
export const likePost = (id)=>API.patch(`posts/${id}/likePost`);

export const SignIn = (form)=>API.post('/user/signin',form);
export const SignUp = (form)=>API.post('/user/signup',form);
// Basically whatever is passed into arrow function should also be included later on while making request
//Don't think that while updating post we're also getting update post (NO!!!)
//updatedPost will be fetched from fetchPosts()
//similarly whatever the changes are happening in post will be fetched from fetchPosts()
//Basically Jiska Jo kaam hai wo bas utna hi kar raha hai like post,patch,delete,like

