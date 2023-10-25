import React,{useState,useEffect} from 'react';
import {useDispatch} from "react-redux";

import {Container,Grid} from "@mui/material";
import Posts from '../Posts/Post';
import Form from "../Forms/Form";
import {getPosts} from "../../actions/posts";

const Home = () => {

    const [CurrentId,setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPosts());
     },[CurrentId,dispatch])

  return (
    <div>
    <Container>
    <Grid container justify="space-between" alignItems="stretch" spacing={3} >                             
    <Grid item sx={{'margin-top':'20px'}} xs={12} sm={4}>
           <Form  CurrentId={CurrentId} setCurrentId = {setCurrentId} />
      </Grid> 
      <Grid item sx={{'margin-top':'20px'}} xs={12} sm={8}>
           <Posts setCurrentId={setCurrentId} />
      </Grid>
      
    </Grid>
  </Container>
  </div>
  );
};

export default Home
