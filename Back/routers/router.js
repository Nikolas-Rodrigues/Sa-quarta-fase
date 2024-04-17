import express from "express";
import { addFunc, listarFunc, apagarFunc, editarFunc,addEpis ,listarEpi} from '../controllers/controller.js'
const router = express.Router()

router.post("/funcionario",addFunc) 
router.get("/funcionario",listarFunc) 
router.delete("/funcionario",apagarFunc) 
router.put("/funcionario",editarFunc)

router.post("/epi",addEpis) 
router.post("/listarEpi",listarEpi) 

export default router


