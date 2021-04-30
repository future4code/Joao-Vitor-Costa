import React from "react";
import {
  DivContainer,
  Text,
  DivCounter,
  Title,
  Img,
  Section,
  Img1
} from "./styled";
import axios from "axios";
import up from "../../img/up.png"
import down from "../../img/down.png"


const CommentCard = ({name, text, commentId, id, value, getDetails, direction}) => {
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
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote`, body,
      {
        headers: {
          Authorization: window.localStorage.getItem("token")
        }
      }).then((res) => {
        getDetails()
      }).catch((err) => {
        alert(err)
      })
    }

    return <DivContainer>
        <Title>{name}</Title>
        <Text>{text}</Text>
        <Section>
        <DivCounter>
        <Img1 onClick={() => vote(-1, direction)} src={down}/>
        <p>{value}</p>
        <Img onClick={() => vote(+1, direction)} src={up}/>
        </DivCounter>
        </Section>
    </DivContainer>
}

export default CommentCard;