
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";
import fs from 'fs';
import path, { resolve } from 'path';
import Category from "../models/Category.js";
const __dirname = resolve();


/**
 * @access private
 * @route api/category
 * @method GET
 */
 export const getAllCategory = async (req, res, next) => {
    
    try {
        
        const categories = await Category.find().sort({ _id: 'desc'});

        if(categories){
            res.status(200).json(categories);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        

    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/category 
 * @method POST
0 */
export const createCategory = async (req, res, next) => {

    try {

        const slug = convertToSlug(req.body.name);

        const category = await Category.create({ 
            ...req.body, 
            slug,
            image: req.file.filename, 
        });

        if(category){
            res.status(200).json({
                "message" : "Category added successfully" 
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
 * @route api/category/id 
 * @method GET
 */
export const getSingleCategory = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const category = await Category.findById(id);

        if(category){
            res.status(200).json(category);
        }else {
            next(createError(401, "Category not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/category/id
 * @method PUT
 */
export const updateCategory = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const data = await Category.findById(id);
        let image = '';
        if(req.file){
            image = req.file.filename;
            fs.unlinkSync(path.join(__dirname, `api/public/images/categories/${data.image}`));
        }else {
            image = data.image;
        }

        const slug = convertToSlug(req.body.name);

        const category = await Category.findByIdAndUpdate(id, { 
            ...req.body, 
            slug,
            image
        }, { new: true });
        
        if(category){
            res.status(202).json({
                "message" : "Category updated successfully",
                "category" : category
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
 * @route api/category/id 
 * @method DELETE 
 */
export const deleteCategory = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const category = await Category.findByIdAndDelete(id);
        
        if(category.image){
            fs.unlinkSync(path.join(__dirname, `api/public/images/categories/${category.image}`));
        }
        
        if(category){
            res.status(202).json({
                "message" : "Category deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/category/status/id 
 * @method GET
 */
 export const updateCategoryStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let category;

        if(value == "true"){
            category = await Category.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
            category = await Category.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(category){
            res.status(202).json({
                "message" : "Category status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
