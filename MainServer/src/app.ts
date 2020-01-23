import express from "express";
import apiController from './controller/index';


const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/api", apiController);

export default app;