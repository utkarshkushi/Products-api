const apikeyMiddleware = (req,res,next) => {
    const api_key = "1234567";
    if(api_key === req.query.api_key){
        next();
    }
    else{
        res.json({msg: "the api_key entered is wrong"});
    }
}

module.exports = apikeyMiddleware;