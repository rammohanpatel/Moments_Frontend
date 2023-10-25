import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import useStyles from './styles';
import { createPosts, updatePost } from "../../actions/posts";

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



const Form = ({ CurrentId, setCurrentId }) => {

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const post = useSelector((state) => (CurrentId ? state.posts.find((message) => message._id === CurrentId) : null));

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (CurrentId) {
      dispatch(updatePost(CurrentId, postData));
      clear();
    }
    else {
      dispatch(createPosts(postData));
      clear();
    }
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }


  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }} className='{`${classes.root} ${classes.form}`}' onSubmit={handleSubmit} >
        <Typography variant="h6" align="center">{CurrentId ? `Editing` : `Creating`} a MEMORY</Typography>
        <TextField required name="creator" variant="outlined" sx={{'margin-bottom':'10px'}} label="Creator" fullWidth value={postData.creator} onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }}></TextField>
        <TextField required name="title" variant="outlined" sx={{'margin-bottom':'10px'}} label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
        <TextField required name="message" variant="outlined" sx={{'margin-bottom':'10px'}} id="outlined-multiline-flexible" multiline maxRows={4} label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
        <TextField  name="tags" variant="outlined" sx={{'margin-bottom':'10px'}} label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}></TextField>
        <div className={classes.fileInput}><FileBase64 type="file" multiple={false} onDone={({ base64 }) => { setPostData({ ...postData, selectedFile: base64 }) }} /></div>
        <Button className={classes.buttonSubmit} sx={{'margin-bottom':'10px'}} variant="contained" endIcon={<SendIcon />} color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  variant="contained" endIcon={<DeleteIcon />} color="error" size="medium" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;
