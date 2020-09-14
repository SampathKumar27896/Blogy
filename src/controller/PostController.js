const User = require('../models/UserModel');
const Post = require('../models/PostModel');
const common = require('../utils/Common');
const com = new common();
exports.index = async function(req, res){
    
    try{
        const posts = await Post.find({})
        if(posts)
            com.setStatus('posts',posts);
        else
            com.setStatus('NoData','No posts created yet!.')
    }catch(e){
       com.setStatus('Failed',e.message,res);
    }
    res.send(com.getResponse()); 
}


