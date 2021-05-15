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
  P,
  Img,
  Img1
} from "./styled";
import axios from "axios";
import up from "../../img/up.png"
import down from "../../img/down.png"

const Card = ({
  title,
  name,
  text,
  id,
  getDetails,
  value,
  direction,
  comments,
}) => {
  const history = useHistory();

  const vote = (number, currentDirection) => {
    let correctedDirection;
    if (number === currentDirection) {
      correctedDirection = 0;
    } else {
      correctedDirection = number;
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
          <Img1 onClick={() => vote(-1, direction)} src={down}/>
          <p>{value}</p>
          <Img onClick={() => vote(+1, direction)} src={up}/>
        </DivCounter>

        <P>{comments} comentario(s)</P>
      </Section>
    </DivContainer>
  );
};

export default Card;
