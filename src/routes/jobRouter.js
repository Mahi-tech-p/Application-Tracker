import express from "express"
import { createJob, deleteJob, getJobs, updateJob } from "../controllers/jobController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router()

router.post('/', authMiddleware,createJob)
router.get('/', authMiddleware, getJobs)
router.delete('/:id',authMiddleware, deleteJob)
router.put("/:id",authMiddleware ,updateJob)
export default router