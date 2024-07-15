import { Document } from "mongoose";
export interface ItweetInterface{
    tweetId : string,
    content : string,
    createdAt: string,
    adminId: string

}