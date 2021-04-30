import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import Card from "../../components/card/Card";
import { DivContainer, DivPost } from "./styled";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress';

const PostListPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const initialForm = {
    text: "",
    title: "",
  };
  const [form, onChange, clear] = useForm(initialForm);
  useEffect(() => {
    getPosts();
  }, []);

  const token = window.localStorage.getItem("token");

  const getPosts = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const orderedList = posts.map((i) => {
    return <Card 
    key={i.id}
    name={i.username} 
    text={i.text} 
    title={i.title} 
    id={i.id}
    value={i.votesCount}
    getDetails={getPosts}
    direction={i.userVoteDirection}
    comments={i.commentsCount}/>;
  });

  const posting = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        form,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        const newPosts = [...posts, res];
        setPosts(newPosts);
        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    posting();
    clear();
  };

  return (
    <DivContainer>
        <DivPost>
        <TextField
          required
          value={form.text}
          name="text"
          type="text"
          onChange={onChange}
          label="Texto"
        />
        <TextField
          required
          value={form.title}
          name="title"
          type="text"
          onChange={onChange}
          label="Título"
        />
        <Button 
        variant={"contained"}
        color='primary'
        onClick={() => handleClick()}>Postar</Button>
        </DivPost>
      {posts.length > 0 ? orderedList : <CircularProgress color="primary"/>}
    </DivContainer>
  );
};

export default PostListPage;
