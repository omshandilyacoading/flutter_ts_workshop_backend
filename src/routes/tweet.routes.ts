import { Router } from "express";
import { getTweetController,getAllTweetsController, createTweetController, updateTweetController, deleteTweetController } from "../controllers/tweet.controller";
const tweetRouter = Router()
tweetRouter.get("/:tweetId",getTweetController)
tweetRouter.get("/get/all",getAllTweetsController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:tweetId", deleteTweetController)
tweetRouter.put("/", updateTweetController)

export default tweetRouter




