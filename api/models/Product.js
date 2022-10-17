import mongoose from "mongoose";


// Create product schema
const productSchema = mongoose.Schema({

    name : {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    regular_price : {
        type: Number,
        required: true
    },
    sale_price : {
        type: Number
    },
    stock : {
        type: Number
    },
    rating: {
        type: Number
    },
    featured_image : {
        type: String,
        required: true
    },
    gallery_image : {
        type: Array,
        default: []
    },
    categories : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category'
    },
    brands : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Brand'
    },
    tags : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Tag'
    },
    sizes : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Size'
    },
    colors : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Color'
    },
    short_desc : {
        type: String
    },
    long_desc : {
        type: String 
    },
    popular_product: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },

}, {
    timestamps: true
});


// static method
productSchema.statics.findCategory = function(id){
    return this.findById(id).select(['name', 'categories']).populate('categories');
}

// export student schema
export default mongoose.model('Product', productSchema);