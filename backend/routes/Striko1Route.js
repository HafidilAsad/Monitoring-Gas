import express from "express";
import {
//   getStriko1,
  getStriko1ById
//   createStriko1,
//   updateStriko1,
//   deleteStriko1,
} from "../controllers/Striko1Controller.js";
 
const router = express.Router();
 
// router.get('/striko1', getCosts);
router.get('/striko1/:id', getStriko1ById);
// router.post('/addstriko1', createStriko1);
// router.patch('/striko1/:id', updateCost);
// router.delete('/striko1/:id', deleteCost);


 
export default router;