import express from "express"
import multer from 'multer';
import path, { resolve } from 'path';
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct, updateProductStatus } from "../controllers/productController.js";


// init router
const router = express.Router();

const __dirname = resolve();


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/products/'));
    }
});

const productMulter = multer({
    storage
}).fields([
    {
        name: 'featured_image',
        maxCount: 1
    },
    {
        name: 'gallery_image',
        maxCount: 8
    }
]);

// route
router.route('/').get(getAllProduct).post(productMulter, createProduct);
router.route('/:value/:id').patch(updateProductStatus);
router.route('/:id').get(getSingleProduct).put(productMulter, updateProduct).delete(deleteProduct);


export default router;