import express from "express";
import { addFunc,listarFunc,apagarFunc,editarFunc } from './controller.js'
const router = express.Router()

router.post("/funcionarios",addFunc) 
router.get("/funcionarios",listarFunc) 
router.delete("/funcionarios",apagarFunc) 
router.put("/funcionarios",editarFunc)

export default router







// app.post("/funcionario",(req,res)=>{

//     console.log(req.body)
    
//     }
//     )