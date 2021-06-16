export enum POST_TYPES {
    NORMAL = 'normal',
    EVENT = 'event'
 }

export type postData = {
    photo: string,
    description: string,
    created_at: string,
    type: POST_TYPES
 }
 
 export type post = postData & { id: string }