import express from "express"
import multer from 'multer';
import path, { resolve } from 'path';
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory, updateCategoryStatus } from "../controllers/categoryController.js";


// init router
const router = express.Router();

const __dirname = resolve();


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/categories/'));
    }
});

const productMulter = multer({
    storage
}).single('image');

// route
router.route('/').get(getAllCategory).post(productMulter, createCategory);
router.route('/:value/:id').patch(updateCategoryStatus);
router.route('/:id').get(getSingleCategory).put(productMulter, updateCategory).delete(deleteCategory);


export default router;