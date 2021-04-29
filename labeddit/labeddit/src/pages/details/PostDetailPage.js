import React, { useState, useEffect } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios"
import Card from "../../components/card/Card"
import {DivContainer, DivComment} from "./styled"
import CommentCard from "../../components/comment/CommentCard"
import useForm from "../../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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
            setComments(res.data.post.comments)
            setPost(res.data.post)
            setValue(res.data.post.votesCount)
            setDirection(res.data.post.userVoteDirection)
            setNumberOfComments(res.data.post.comments.length)
        }).catch((err) => {
            console.log(err)
        })
    }

    const orderedComments = comments.map((com) => {
        return  <CommentCard 
            name={com.username}
            text={com.text}
        />
    })

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

    return <DivContainer>
        {post ? <Card 
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
        : <p>Carregando</p> }

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

        {comments ? orderedComments : <p>Carregando...</p>}
    </DivContainer>
}

export default PostDetailPage;