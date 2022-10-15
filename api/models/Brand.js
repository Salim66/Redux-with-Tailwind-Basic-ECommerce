import mongoose from "mongoose";

// create brand schema
const brandSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },

},
{
    timestamps: true
});

// export default
export default mongoose.model('Brand', brandSchema);