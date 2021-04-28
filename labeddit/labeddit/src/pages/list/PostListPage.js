import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import Card from "../../components/card/Card";
import { DivContainer } from "./styled";

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
    id={i.id}/>;
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

  const handleClick = (e) => {
    e.preventDefault();
    posting();
    clear();
  };

  return (
    <DivContainer>
      <form onSubmit={handleClick}>
        <input
          required
          value={form.text}
          name="text"
          type="text"
          onChange={onChange}
          placeholder="Texto"
        />
        <input
          required
          value={form.title}
          name="title"
          type="text"
          onChange={onChange}
          placeholder="Título"
        />
        <button>Postar</button>
      </form>

      {posts ? orderedList : <h1>Carregando</h1>}
    </DivContainer>
  );
};

export default PostListPage;
