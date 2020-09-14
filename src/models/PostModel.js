const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    body : {
        type : String,
        required : true,
        trim : true
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps : true})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;