import * as jwt from "jsonwebtoken";
import {authenticationData} from "../types"

 const getDataByToken = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id
  };
  return result;
};

export default getDataByToken;