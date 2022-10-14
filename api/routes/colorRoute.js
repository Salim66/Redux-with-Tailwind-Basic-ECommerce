import express from "express"
import { createColor, deleteColor, getAllColor, getSingleColor, updateColor, updateColorStatus } from "../controllers/colorController.js";


// init router
const router = express.Router();

// route
router.route('/').get(getAllColor).post(createColor);
router.route('/:value/:id').patch(updateColorStatus);
router.route('/:id').get(getSingleColor).put(updateColor).delete(deleteColor);


export default router;