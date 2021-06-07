// 3.b

import * as jwt from "jsonwebtoken"

export type authenticationData = {
    id: string
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