import express from 'express'
import ClassesController from "./controllers/ClassesController";

const router = express.Router()

const classesController = new ClassesController()

router.post('/classes', classesController.create)

export default router