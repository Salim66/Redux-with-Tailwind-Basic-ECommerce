import express from "express"
import { createSize, deleteSize, getAllSize, getSingleSize, updateSize, updateSizeStatus } from "../controllers/sizeController.js";

// init router
const router = express.Router();

// route
router.route('/').get(getAllSize).post(createSize);
router.route('/:value/:id').patch(updateSizeStatus);
router.route('/:id').get(getSingleSize).put(updateSize).delete(deleteSize);


export default router;