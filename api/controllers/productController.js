import Product from "../models/Product.js";
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";
import fs from 'fs';
import path, { resolve } from 'path';
const __dirname = resolve();


/**
 * @access private
 * @route api/product
 * @method GET
 */
 export const getAllProduct = async (req, res, next) => {
    
    try {
        
        const products = await Product.find().sort({ _id: 'desc'});

        if(products){
            res.status(200).json(products);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        

    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/product 
 * @method POST
0 */
export const createProduct = async (req, res, next) => {

    let gallery_image = [];
    for(let i = 0; i < req.files.gallery_image.length; i++){
        gallery_image.push(req.files.gallery_image[i].filename);
    }

    try {

        const slug = convertToSlug(req.body.name);

        const product = await Product.create({ 
            ...req.body, 
            slug,
            featured_image: req.files.featured_image[0].filename, 
            gallery_image
        });

        if(product){
            res.status(200).json({
                "message" : "Product added successfully" 
            })
        }else {
            next(createError(401, "Something want wrong!"));
        }

    } catch (error) {
        next(createError(error));
    }

} 

/**
 * @access private 
 * @route api/product/id 
 * @method GET
 */
export const getSingleProduct = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const product = await Product.findById(id).populate(['categories', 'brands', 'tags', 'colors', 'sizes']);

        if(product){
            res.status(200).json(product);
        }else {
            next(createError(401, "Product not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/product/id
 * @method PUT
 */
export const updateProduct = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const data = await Product.findById(id);
        let image = '';
        if(req.file){
            image = req.file.filename;
            fs.unlinkSync(path.join(__dirname, `api/public/images/products/${data.featured_image}`));
        }else {
            image = data.featured_image;
        }

        const slug = convertToSlug(req.body.name);

        const product = await Product.findByIdAndUpdate(id, { 
            ...req.body, 
            slug,
            featured_image: image
        }, { new: true });
        
        if(product){
            res.status(202).json({
                "message" : "Product updated successfully",
                "product" : product
            })
        }else {
            next(createError(401, "Something want wrong"));
        }

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/product/id 
 * @method DELETE 
 */
export const deleteProduct = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const product = await Product.findByIdAndDelete(id);
        
        if(product._featured_image){
            fs.unlinkSync(path.join(__dirname, `api/public/images/products/${product.featured_image}`));
        }
        
        if(product){
            res.status(202).json({
                "message" : "Product deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/product/status/id 
 * @method GET
 */
 export const updateProductStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let product;

        if(value == "true"){
           product = await Product.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
           product = await Product.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(product){
            res.status(202).json({
                "message" : "Product status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
