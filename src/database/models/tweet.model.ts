import { models, Schema, model } from "mongoose";
import { Document } from "mongoose";
import mongoose from "mongoose";
import { ItweetInterface } from "../interface/tweet.interface";

const TweetSchema = new Schema<ItweetInterface>({
    tweetId : {type:String, requited:true},
    content : {type:String, description: ""},
    createdAt: {type:String, requited:true},
    adminId: {type:String, requited:true}

}
);
const TweetModel = models.tweetModel || model<ItweetInterface>("tweetModel", TweetSchema);
export default TweetModel

