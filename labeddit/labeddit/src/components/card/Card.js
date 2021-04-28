import React from "react"
import { useHistory } from "react-router-dom";
import { goToPostDetail } from "../../routes/coordinator";
import {DivContainer, Text, Section, DivCounter, DivText, H2, Button} from './styled'


const Card = ({title, name, text, id, vote, value}) => {
    const history = useHistory() 
    return <DivContainer>
        
        <H2>{title}</H2>

        <DivText onClick={() => goToPostDetail(history, id)}>
        <p>{name}</p>
        <Text>{text}</Text>
        </DivText>

        <Section>

        <DivCounter>
        <Button onClick={() => vote(-1)}>-</Button>
        <p>{value}</p>
        <Button onClick={() => vote(1)} >+</Button>
        </DivCounter>

        <p>"comentarios"</p>
        </Section>
    </DivContainer>
}

export default Card;

