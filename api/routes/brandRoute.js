import express from "express"
import multer from 'multer';
import { createBrand, deleteBrand, getAllBrand, getSingleBrand, updateBrand, updateBrandStatus } from "../controllers/brandController.js";
import path, { resolve } from 'path';


// init router
const router = express.Router();

const __dirname = resolve();


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/brands/'));
    }
});

const productMulter = multer({
    storage
}).single('image');

// route
router.route('/').get(getAllBrand).post(productMulter, createBrand);
router.route('/:value/:id').patch(updateBrandStatus);
router.route('/:id').get(getSingleBrand).put(productMulter, updateBrand).delete(deleteBrand);


export default router;