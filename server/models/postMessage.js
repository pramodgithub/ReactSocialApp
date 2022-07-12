import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    count:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: new Date()
    }
})

const postMessages = mongoose.model('postMessages', postSchema);

export default postMessages;