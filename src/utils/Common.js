const { response } = require("express");

class Common {
    constructor(){
        this.result = {};
    }
    setResponse(key, value){
        this.result[key] = value;
   }
   getResponse(){
       return this.result;
   }
   setStatus(action,message,res){
        switch(action){
            case 'Success' :
                res.status(201);
                this.setResponse('status', true);
                break;
            case 'Failed' :
                res.status(400);
                this.setResponse('status', false);
                break;
            case 'NoData' :
                res.status(204);
                this.setResponse('status', true);
                break;
            case 'Auth Failed' :
                res.status(401);
                this.setResponse('status', false);
                break;
        }
        this.setResponse('message', message);
   }
}

module.exports = Common;