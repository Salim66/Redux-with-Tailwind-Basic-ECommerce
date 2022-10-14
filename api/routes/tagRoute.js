import express from "express"
import { createTag, deleteTag, getAllTag, getSingleTag, updateTag, updateTagStatus } from "../controllers/tagController.js";


// init router
const router = express.Router();

// route
router.route('/').get(getAllTag).post(createTag);
router.route('/:value/:id').patch(updateTagStatus);
router.route('/:id').get(getSingleTag).put(updateTag).delete(deleteTag);


export default router;