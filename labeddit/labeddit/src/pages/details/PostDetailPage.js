import React, { useState, useEffect } from "react"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import axios from "axios"
import Card from "../../components/card/Card"
import {DivContainer} from "./styled"

const PostDetailPage = () => {
    useProtectedPage()

    const pathParams = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [currentVote, setCurrentVote] = useState(0)
    const [value, setValue] = useState(0)

    useEffect(() => {
        getDetails()
    }, [])

    const vote = (number) => {
        const body = {
            "direction": number
        }
    const token = window.localStorage.getItem("token")
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/vote`, body,
        {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setValue(value + currentVote)
        }).catch((err) => {
            console.log(err.message)
        })
    }

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
            setCurrentVote(res.data.post.userVoteDirection)
        }).catch((err) => {
            console.log(err)
        })
    }

    const orderedComments = comments.map((com) => {
        return  <div key={com.id}>
            <h2>{com.username}</h2>
            <p>{com.text}</p>
        </div>
    })

    return <DivContainer>
        {post ? <Card 
        key = {post.id}
        name={post.username}
        text={post.text}
        title={post.title}
        id={pathParams.id}
        currentVote={currentVote}
        vote={vote}
        value={value}/> 
        : <p>Carregando</p> }

        {comments ? orderedComments : <p>lalala</p>}
    </DivContainer>
}

export default PostDetailPage;