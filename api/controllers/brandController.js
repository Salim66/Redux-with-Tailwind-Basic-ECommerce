import Brand from "../models/Brand.js";
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";
import fs from 'fs';
import path, { resolve } from 'path';
const __dirname = resolve();


/**
 * @access private
 * @route api/brand
 * @method GET
 */
 export const getAllBrand = async (req, res, next) => {
    
    try {
        
        const brands = await Brand.find().sort({ _id: 'desc'});

        if(brands){
            res.status(200).json(brands);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        

    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/brand 
 * @method POST
0 */
export const createBrand = async (req, res, next) => {

    try {

        const slug = convertToSlug(req.body.name);

        const brand = await Brand.create({ 
            ...req.body, 
            slug,
            image: req.file.filename, 
        });

        if(brand){
            res.status(200).json({
                "message" : "Brand added successfully" 
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
 * @route api/brand/id 
 * @method GET
 */
export const getSingleBrand = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const brand = await Brand.findById(id);

        if(brand){
            res.status(200).json(brand);
        }else {
            next(createError(401, "Brand not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/brand/id
 * @method PUT
 */
export const updateBrand = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const data = await Brand.findById(id);
        let image = '';
        if(req.file){
            image = req.file.filename;
            fs.unlinkSync(path.join(__dirname, `api/public/images/brands/${data.image}`));
        }else {
            image = data.image;
        }

        const slug = convertToSlug(req.body.name);

        const brand = await Brand.findByIdAndUpdate(id, { 
            ...req.body, 
            slug,
            image
        }, { new: true });
        
        if(brand){
            res.status(202).json({
                "message" : "Brand updated successfully",
                "brand" : brand
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
 * @route api/brand/id 
 * @method DELETE 
 */
export const deleteBrand = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const brand = await Brand.findByIdAndDelete(id);
        
        if(brand.image){
            fs.unlinkSync(path.join(__dirname, `api/public/images/brands/${brand.image}`));
        }
        
        if(brand){
            res.status(202).json({
                "message" : "Brand deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/brand/status/id 
 * @method GET
 */
 export const updateBrandStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let brand;

        if(value == "true"){
           brand = await Brand.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
           brand = await Brand.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(brand){
            res.status(202).json({
                "message" : "Brand status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
