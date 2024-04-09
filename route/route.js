import express from "express";
import { buscandoDados } from '../controller/controller.js'
const router = express.Router()

router.get("/", buscandoDados) //read


export default router