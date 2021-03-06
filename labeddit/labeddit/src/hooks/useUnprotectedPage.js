import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPostList } from "../routes/coordinator";

export const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      goToPostList(history);
    }
  }, [history]);
};