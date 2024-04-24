import express from "express";
import { addFunc, listarFunc, apagarFunc, editarFunc, addEpis, listarEpi,editarEpi,apagarEpi, addRelatorio,listarRelatorios, buscarEpi,listarHistoricoFunc} from '../controllers/controller.js'
const router = express.Router()

router.post("/addFunc", addFunc)
router.post("/listarFunc", listarFunc)
router.put("/editarFunc", editarFunc)
router.delete("/apagarFunc/:id", apagarFunc)

router.post("/epi", addEpis)
router.post("/listarEpi", listarEpi)
router.put("/editarEpi", editarEpi)
router.delete("/apagarEpi/:id", apagarEpi)

router.post("/addRelatorio", addRelatorio)
router.post("/listarRelatorios", listarRelatorios)
router.post("/hfunc",listarHistoricoFunc)

router.post("/buscarEpi",buscarEpi)




export default router


