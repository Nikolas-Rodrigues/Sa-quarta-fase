import express from "express";
import { addFunc, listarFunc, apagarFunc, editarFunc, addEpis, listarEpi,editarEpi,apagarEpi, relatorio} from '../controllers/controller.js'
const router = express.Router()

router.post("/addFunc", addFunc)
router.post("/listarFunc", listarFunc)
router.put("/editarFunc", editarFunc)
router.delete("/apagarFunc", apagarFunc)

router.post("/epi", addEpis)
router.post("/listarEpi", listarEpi)
router.put("/editarEpi", editarEpi)
router.delete("/apagarEpi", apagarEpi)

router.post("/relatorio", relatorio)
router.post("/validade", relatorio)




export default router


