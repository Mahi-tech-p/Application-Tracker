import User from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

export const register = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const exisitingUser = await User.findOne({ email });
        if(exisitingUser) return res.status(400).json({message:"user Alreay exists"})
        const hashPassword = await bcrypt.hash(password, 10)
        
        const user = await User.create({
            name,
            email,
            password: hashPassword
        });
        res.json(user)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user)  return res.status(400).json({ msg: "user not found" }) 
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" })
        const token = jwt.sign({ userid: user._id }, "secretkey", { expiresIn: "1d" });
        res.json({token, user})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const getRouteDummy = async (req, res) => {
    res.send("Helllo from auth Router")
}