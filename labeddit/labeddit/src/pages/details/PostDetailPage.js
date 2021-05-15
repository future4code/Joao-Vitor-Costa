import React, { useState, useEffect } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios"
import Card from "../../components/card/Card"
import {DivContainer, DivComment, Div} from "./styled"
import CommentCard from "../../components/comment/CommentCard"
import useForm from "../../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress';

const PostDetailPage = () => {
    useProtectedPage()
    const initialForm = {
        text: ""
      };
      const [form, onChange, clear] = useForm(initialForm);
    const pathParams = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [value, setValue] = useState(0)
    const [direction, setDirection] = useState(0)
    const [numberOfComments, setNumberOfComments] = useState(0)

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`,
        {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            const newList = res.data.post.comments.filter((comment)=>{
                return typeof comment.text === "string"
            })
            const filteredPost = {...res.data.post, comments: newList}
            setPost(filteredPost)
            setComments(filteredPost.comments)
            setValue(res.data.post.votesCount)
            setDirection(res.data.post.userVoteDirection)
    setNumberOfComments(res.data.post.comments.length)
        }).catch((err) => {
            console.log(err)
        })
    }

    const postComment = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment`, form, 
        {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        }).then((res) => {
            getDetails()
            clear()
        }).catch((err)=> {
            alert(err.response.data.message)
            clear()
        })
    }

    const handleClick = () => {
        postComment()
        clear()
    }

    const orderedComments = () => {
        if(comments.length === 0){
            return <Div><CircularProgress color="primary"/> <h3>Se o loading permanecer por mais de 10 segundos, esse post ainda não possui comentários, seja o primeiro logo acima!!!</h3></Div>
        } else {
           return comments.map((com) => {
                return <CommentCard 
                 name={com.username}
                 text={com.text}
                 commentId={com.id}
                 value={com.votesCount}
                 direction={com.userVoteDirection}
                 getDetails={getDetails}
                 id={pathParams.id}>
                 </CommentCard>})
        }
    }

    return <DivContainer>
        {post.length !== 0 ? <Card 
        key = {post.id}
        name={post.username}
        text={post.text}
        title={post.title}
        id={pathParams.id}
        getDetails={getDetails}
        value={value}
        direction={direction}
        comments={numberOfComments}
        /> 
        : <CircularProgress color="secondary"/> }
        <DivComment>
        <TextField
          required
          value={form.text}
          name="text"
          type="text"
          onChange={onChange}
          label="Fazer um comentário"
        />
        <Button 
        onClick={handleClick}
        variant="contained"
        color = 'primary'
        >Enviar</Button>
        </DivComment>
         {orderedComments()} 
    </DivContainer>
}

export default PostDetailPage;