import React from "react";
import {
  DivContainer,
  Text,
  DivCounter,
  Title,
  Button,
  Section
} from "./styled";
import axios from "axios";

const CommentCard = ({name, text}) => {

    return <DivContainer>
        <Title>{name}</Title>
        <Text>{text}</Text>
        <Section>
        <DivCounter>
        <Button>-</Button>
        <p>0</p>
          <Button >+</Button>
        </DivCounter>
        </Section>
    </DivContainer>
}

export default CommentCard;