const User = require('../models/UserModel');
const common = require('../utils/Common');
const com = new common();
exports.index = async function(req, res){
    
    try{
        const user = new User(req.body);
        if(req.body['password'] !== req.body['re_password']){
            throw new Error("passwords do not match");
        }else{
            await user.save()
            const token = await user.generateAuthToken()
            com.setResponse('token', token);
            com.setResponse('user',user);
            com.setStatus('Success','Registration success',res);
        }
    }catch(e){
       com.setStatus('Failed',e.message,res);
    }
    res.send(com.getResponse()); 
}


exports.login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        com.setResponse('token', token);
        com.setResponse('user',user);
        com.setStatus('Success','Login success',res);
    } catch (e) {
        com.setStatus('Failed',e.message,res);
    }
    res.send(com.getResponse());
}

exports.logout =  async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        com.setStatus('Success','Logout success',res);
    } catch (e) {
        com.setStatus('Failed',e.message,res);
    }
    res.send(com.getResponse());
}