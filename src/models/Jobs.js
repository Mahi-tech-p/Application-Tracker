import mongoose from "mongoose"

const jobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Applied", "Interview", "Offer"],
        default: "Applied"
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },

},
    {
        timestamp: true
    }
)

const Job = mongoose.model("Job", jobsSchema);
export default Job