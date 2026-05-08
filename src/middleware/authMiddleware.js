import jwt from "jsonwebtoken"

const authMiddleware = (req, res,next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: "No token is provided"
            })
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded
        next()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export default authMiddleware