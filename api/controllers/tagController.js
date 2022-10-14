
import Tag from "../models/Tag.js";
import { convertToSlug } from "../utility/slug.js";
import createError from "./errorController.js";


/**
 * @access private
 * @route api/tag
 * @method GET
 */
 export const getAllTag = async (req, res, next) => {
    
    try {
        
        const tags = await Tag.find().sort({ _id: 'desc'});

        if(tags){
            res.status(200).json(tags);
        }else {
            next(createError(401, "Something want wrong!"))
        }
        

    } catch (error) {
        next(error);
    }

} 

/**
 * @access private
 * @route api/tag 
 * @method POST
0 */
export const createTag = async (req, res, next) => {

    try {

        const slug = convertToSlug(req.body.name);
    
        const tag = await Tag.create({ ...req.body, slug });

        if(tag){
            res.status(200).json({
                "message" : "Tag added successfully" 
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
 * @route api/tag/id 
 * @method GET
 */
export const getSingleTag = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const tag = await Tag.findById(id);

        if(tag){
            res.status(200).json(tag);
        }else {
            next(createError(401, "Tag not found!"));
        }      

    } catch (error) {
        next(createError(error));
    }

}

/**
 * @access private 
 * @route api/tag/id
 * @method PUT
 */
export const updateTag = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const slug = convertToSlug(req.body.name);

        const tag = await Tag.findByIdAndUpdate(id, { ...req.body, slug }, { new: true });
        
        if(tag){
            res.status(202).json({
                "message" : "Tag updated successfully",
                "tag" : tag
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
 * @route api/tag/id 
 * @method DELETE 
 */
export const deleteTag = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const tag = await Tag.findByIdAndDelete(id);
        
        if(tag){
            res.status(202).json({
                "message" : "Tag deleted successfully"
            })
        }

    } catch (error) {
        next(error);
    }


}

/**
 * @access private 
 * @route api/tag/status/id 
 * @method GET
 */
 export const updateTagStatus = async (req, res, next) => {

    try {
        
        let { value, id } = req.params;
        let tag;

        if(value == "true"){
           tag = await Tag.findByIdAndUpdate(id, { ...req.body, status: false }, { new: true });
        }else {
           tag = await Tag.findByIdAndUpdate(id, { ...req.body, status: true }, { new: true });
        }


        if(tag){
            res.status(202).json({
                "message" : "Tag status updated successfully"
            })
        }else {
            next(createError(401, "Something want wrong"));
        }      

    } catch (error) {
        next(createError(error));
    }

}
