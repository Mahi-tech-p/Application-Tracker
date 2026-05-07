import app from "./app.js";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import authRoutes from './routes/authRouter.js'
import jobRoutes from "./routes/jobRouter.js"
dotenv.config()

connectDB();

app.use("/api/auth", authRoutes)
app.get("/test", (req, res) => {
    res.send("it's working")
}
)
app.use("/api/jobs",jobRoutes)
console.log("auth routes loaded")
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => { console.log(`server is running in ${PORT}`) })
