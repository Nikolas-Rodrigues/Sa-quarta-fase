import express from "express";
import { addFunc, listarFunc, apagarFunc, editarFunc } from '../controllers/controller.js'
const router = express.Router()

router.post("/funcionario",addFunc) 
router.get("/funcionario",listarFunc) 
router.delete("/funcionario",apagarFunc) 
router.put("/funcionario",editarFunc)

export default router


