import Color from "../models/Color.js";
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";


/**
 * @access private
 * @route api/color
 * @method GET
 */
 export const getAllColor = async (req, res, next) => {
    
    try {
        
        const colors = await Color.find().sort({ _id: 'desc'});

        if(colors){
            res.status(200).json(colors);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        
    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/color 
 * @method POST
0 */
export const createColor = async (req, res, next) => {

    try {

        const slug = convertToSlug(req.body.name);
    
        const color = await Color.create({ ...req.body, slug });

        if(color){
            res.status(200).json({
                "message" : "Color added successfully" 
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
 * @route api/color/id 
 * @method GET
 */
export const getSingleColor = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const color = await Color.findById(id);

        if(color){
            res.status(200).json(color);
        }else {
            next(createError(401, "Color not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/color/id
 * @method PUT
 */
export const updateColor = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const slug = convertToSlug(req.body.name);

        const color = await Color.findByIdAndUpdate(id, { ...req.body, slug }, { new: true });
        
        if(color){
            res.status(202).json({
                "message" : "Color updated successfully",
                "color" : color
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
 * @route api/color/id 
 * @method DELETE 
 */
export const deleteColor = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const color = await Color.findByIdAndDelete(id);
        
        if(color){
            res.status(202).json({
                "message" : "Color deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/color/status/id 
 * @method GET
 */
 export const updateColorStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let color;

        if(value == "true"){
           color = await Color.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
           color = await Color.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(color){
            res.status(202).json({
                "message" : "Color status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
