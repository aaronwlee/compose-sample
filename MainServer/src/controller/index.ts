import express, { Request, Response } from "express";
import pingController from './ping'
const router = express.Router();

router.use('/ping', pingController)


export default router;