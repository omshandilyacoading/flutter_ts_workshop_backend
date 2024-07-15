"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    uid: { type: String, required: true },
    tweets: { type: [String], default: [] },
    firstName: { type: String, default: "User" },
    lastName: { type: String, default: "Name" },
    email: { type: String, required: true },
    createdAt: { type: String, required: true },
});
const UserModel = mongoose_1.models.userModel || (0, mongoose_1.model)("userModel", UserSchema);
exports.default = UserModel;
