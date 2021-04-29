import React from "react";
import { useHistory } from "react-router-dom";
import { goToPostDetail } from "../../routes/coordinator";
import {
  DivContainer,
  Text,
  Section,
  DivCounter,
  DivText,
  Title,
  Button,
  P
} from "./styled";
import axios from "axios";

const Card = ({ title, name, text, id, getDetails, value, direction, comments }) => {
  const history = useHistory();

  const vote = (number, currentDirection) => {
    let correctedDirection
    if(number === currentDirection) {
        correctedDirection = 0
    } else {
        correctedDirection = number
    }

    const body = {
      direction: correctedDirection,
    };
    const token = window.localStorage.getItem("token");
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        getDetails();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <DivContainer>
      <Title>
        <h3>{title}</h3>
      </Title>
      <DivText onClick={() => goToPostDetail(history, id)}>
        <p>{name}</p>
        <Text>{text}</Text>
      </DivText>

      <Section>
        <DivCounter>
          <Button onClick={() => vote(-1, direction)}>-</Button>
          <p>{value}</p>
          <Button onClick={() => vote(+1, direction)}>+</Button>
        </DivCounter>

        <P>{comments} comentario(s)</P>
      </Section>
    </DivContainer>
  );
};

export default Card;
