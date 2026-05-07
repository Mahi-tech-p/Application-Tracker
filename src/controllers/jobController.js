import Job from '../models/Jobs.js'
export const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find()
        res.status(200).json(jobs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const deleteJob = async (req, res) => {
    // console.log("req is here")
    try {
        // console.log("req is inside req")
        await Job.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Job Deleted Successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json(updatedJob)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}