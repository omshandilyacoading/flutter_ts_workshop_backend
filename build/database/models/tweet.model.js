"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TweetSchema = new mongoose_1.Schema({
    tweetId: { type: String, requited: true },
    content: { type: String, description: "" },
    createdAt: { type: String, requited: true },
    adminId: { type: String, requited: true }
});
const TweetModel = mongoose_1.models.tweetModel || (0, mongoose_1.model)("tweetModel", TweetSchema);
exports.default = TweetModel;
