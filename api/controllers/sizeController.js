import Size from "../models/Size.js";
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";


/**
 * @access private
 * @route api/size
 * @method GET
 */
 export const getAllSize = async (req, res, next) => {
    
    try {
        
        const sizes = await Size.find().sort({ _id: 'desc'});

        if(sizes){
            res.status(200).json(sizes);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        

    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/size 
 * @method POST
0 */
export const createSize = async (req, res, next) => {

    try {

        const slug = convertToSlug(req.body.name);
    
        const size = await Size.create({ ...req.body, slug });

        if(size){
            res.status(200).json({
                "message" : "Size added successfully" 
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
 * @route api/size/id 
 * @method GET
 */
export const getSingleSize = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const size = await Size.findById(id);

        if(size){
            res.status(200).json(size);
        }else {
            next(createError(401, "Size not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/size/id
 * @method PUT
 */
export const updateSize = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const slug = convertToSlug(req.body.name);

        const size = await Size.findByIdAndUpdate(id, { ...req.body, slug }, { new: true });
        
        if(size){
            res.status(202).json({
                "message" : "Size updated successfully",
                "size" : size
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
 * @route api/size/id 
 * @method DELETE 
 */
export const deleteSize = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const size = await Size.findByIdAndDelete(id);
        
        if(size){
            res.status(202).json({
                "message" : "Size deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/size/status/id 
 * @method GET
 */
 export const updateSizeStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let size;

        if(value == "true"){
           size = await Size.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
           size = await Size.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(size){
            res.status(202).json({
                "message" : "Size status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
