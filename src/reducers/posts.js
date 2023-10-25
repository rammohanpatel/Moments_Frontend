import {FETCH_ALL,CREATE,UPDATE, DELETE,LIKEPOST} from "../constants/actionTypes";

export default (posts=[],action)=>{
    switch(action.type){
        case LIKEPOST:
             return posts.map((post)=>(post._id === action.payload._id ? action.payload:post))
        case DELETE:
             return posts.filter((post)=>(post._id!== action.payload))
        case UPDATE:
            return posts.map((post)=>(post._id === action.payload._id ? action.payload:post))
        case FETCH_ALL :
            return action.payload;
        case CREATE :
            return [...posts,action.payload];  
        default:
            return posts;      
    }
};