// 3.b

import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../types"

export type authenticationData = {
    id: string,
    role: USER_ROLES
}

const expiresIn = "40m"

export function generateToken(payload : authenticationData): string {
    const token = jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {
            expiresIn
        }
    )
    return token
}