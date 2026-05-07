import mongoose from "mongoose"

const jobsSchema = new mongoose.Schema({
    company: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Applied", "Interview", "Offer"],
        default: "Applied"
    }
})

const Job = mongoose.model("Job", jobsSchema);
export default Job