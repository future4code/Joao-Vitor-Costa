import React, {useState} from 'react';
import {StyledToolBar, StyledAppBar} from './styled';
import Button from '@material-ui/core/Button';
import { goToLogin } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";

const Header = ({text, setText}) => {
const token = window.localStorage.getItem("token")
const history = useHistory()

const logout = () => {
  window.localStorage.removeItem("token")
}

const action = () => {
  if(token) {
    logout()
    goToLogin(history)
    setText("Login")
  } else {
    goToLogin(history)
  }
}


  return (
      <StyledAppBar position="static">
        <StyledToolBar>
        <Button color="inherit" onClick={() => goToLogin(history)}>LabEddit</Button>
          <Button onClick={action} color="inherit">{text}</Button>
        </StyledToolBar>
      </StyledAppBar>
  );
}

export default Header;