const notfound = (req,res,next) =>{
    const error=new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errHandler = (err,req, res, next) => {
    const statusCode = res.statusCode !=200? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })

    next();
}

module.exports = {notfound, errHandler}