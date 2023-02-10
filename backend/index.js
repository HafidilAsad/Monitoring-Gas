import express from "express";
import cors from "cors";
import ReportRoute from "./routes/ReportRoute.js";
import CostRoute from "./routes/CostRoute.js";
//import Striko1Route from "./routes/Striko1Route.js"

 
const app = express();
app.use(cors());
app.use(express.json());
app.use(ReportRoute);
app.use(CostRoute);
// app.use(Striko1Route);

 
app.listen(5000, ()=> console.log('Server up and running in port 5000'));