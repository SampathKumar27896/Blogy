exports.setAuthenticationToken =  function (token){
    localStorage.setItem('token', token);
}

exports.getAuthenticationToken = function(){
    return localStorage.getItem('token');
} 

exports.setUserDetails = function(user){
    localStorage.setItem('user',JSON.stringify(user));
}

exports.getUserDetails = function(){
    return JSON.parse(localStorage.getItem('user'));
}