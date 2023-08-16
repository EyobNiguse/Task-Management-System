const SECRET =  process.env.SECRET || "HAPPYCODINGMAN";
const { sendResponse, loginValidator,validateID } = require("../helpers/Helper");

const isLoggedIn = async (req, res, next) => {
    const token = String(req.headers["authorization"] || "");
    
    try {
        let decoded = await jwt.verify(token, SECRET)
        if (!decoded) return ;
        req.user = decoded;
        next();
    } 
    catch (e) 
    {
        return res.status(400).json({ status: 400, ok: false, message: e.message });
    };
}
module.export = {isLoggedIn}