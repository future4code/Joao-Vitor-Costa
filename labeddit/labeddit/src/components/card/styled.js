import styled from "styled-components";

export const DivContainer = styled.div`
  width: 350px;
  height: 400px;
  margin: 6px;
  border-radius: 24px;
margin: 20px;
`;

export const Text = styled.p`
  overflow: auto;
`;

export const DivCounter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 10%;
  align-items: center;
  background-color: #ff4500;
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const DivText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65%;
  max-height: 65%;
  border-left: 1px solid black;
  border-right: 1px solid black;
  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff4500;
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Button = styled.button`
  height: 20%;
`;

export const P = styled.p`
  margin-right: 6px;
`

export const Img = styled.img`
  height: 10%;
  width: 12%;
  margin: 0 3px;
  :hover{
    cursor: pointer;
  }
`

export const Img1 = styled.img`
  height: 10%;
  width: 10%;
  margin: 0 3px;
  :hover{
    cursor: pointer;
  }
`