import {Response,Request} from "express"
import { getTweetRepo,createTweetRepo,deleteTweetRepo,updateTweetRepo } from "../repositories/tweet.repository"
import { updateUserWithTweetIdRepo,deleteUserWithTweetIdRepo } from "../repositories/user.repository";
import { ItweetInterface } from "../database/interface/tweet.interface";

export const getTweetController = async(req:Request,res:Response)=>{
    const tweetId = req.params.tweetId as string;

    try {
        const tweet =await getTweetRepo(tweetId)
        if(tweet){
            res.status(200).json({"data": tweet})
        }
        else{
        res.status(500).json({error:tweet})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"error":error})
    }
}


export const createTweetController = async(req:Request,res:Response)=>{
    const tweet: ItweetInterface = req.body

    try {
        const success =await createTweetRepo(tweet);
        if(success){
           const userUpdateSuccess = await updateUserWithTweetIdRepo(tweet.adminId, tweet.tweetId)
           if(userUpdateSuccess){
            res.status(200).json({data: tweet})
           }
           else{
        res.status(500).json({"error":"user not updated"})
           }
        }
        else{
        res.status(500).json({"error":"tweet not created"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"error":error})
    }
}


export const updateTweetController = async(req:Request,res:Response)=>{
    const updatedTweet: ItweetInterface = req.body

    try {
        const success = await updateTweetRepo(updatedTweet.tweetId, updatedTweet);
        if(success){
            res.status(200).json({"data": "Tweet Updated"})
        }
        else{
        res.status(500).json({"error":"Tweet not Updated"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"error":error})
    }
}


export const deleteTweetController = async (req: Request, res: Response) => {
    const tweetId = req.params.tweetId as string;

    try {
        const tweet = await getTweetRepo(tweetId);
        if (!tweet) {
            return res.status(500).json({ "error": "Tweet not found" });
        }
        
        const success = await deleteTweetRepo(tweetId);
        if (success) {
            const userDeleteSuccess = await deleteUserWithTweetIdRepo(tweet.adminId, tweetId);
            if (userDeleteSuccess) {
                res.status(200).json({ "data": "Tweet Deleted" });
            } else {
                res.status(500).json({ "error": "User's Tweet not Deleted" });
            }
        } else {
            res.status(500).json({ "error": "Tweet not Deleted" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
};