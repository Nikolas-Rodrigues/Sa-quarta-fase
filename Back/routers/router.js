import express from "express";
import { addFunc, listarFunc, apagarFunc, editarFunc, addEpis, listarEpi, relatorio } from '../controllers/controller.js'
const router = express.Router()

router.post("/addFunc", addFunc)
router.post("/listarFunc", listarFunc)
router.put("/editarFunc", editarFunc)
router.delete("/apagarFunc", apagarFunc)

router.post("/epi", addEpis)
router.post("/listarEpi", listarEpi)
router.post("/relatorio", relatorio)

export default router


