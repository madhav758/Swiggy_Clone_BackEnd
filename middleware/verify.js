//verify token 
import jwt from 'jsonwebtoken'
import userModel from '../models/User.model.js';
export function verifyToken(req, res, next) {
    //how we cretae adn send token ? => JWT will create the token
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ) {
        jwt.verify(req.headers.authorization.split(' ')[1],
            'SECRETKEY',
            async function (err, verifiedToken) {
                if (err) {
                    return res.status(403).json({ message: "invalid token" })
                }

                // console.log(verifiedToken);
                const user = await userModel.findById(verifiedToken.id)
                console.log(req, "before");
                req.user = user;
                console.log(req, "after");
                next();
            });
    }
    else {
        return res.status(403).json({ message: " token not available" })
    }


}