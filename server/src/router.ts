import express from 'express'
import ClassesController from "./controllers/ClassesController";

const router = express.Router()

const classesController = new ClassesController()

router.get('/classes', classesController.index)
router.post('/classes', classesController.create)

export default router