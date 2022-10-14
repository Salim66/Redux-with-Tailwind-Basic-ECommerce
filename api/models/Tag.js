import mongoose from "mongoose";

// create tag schema
const tagSchema = mongoose.Schema({

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
    status: {
        type: Boolean,
        default: true
    },

},
{
    timestamps: true
});

// export default
export default mongoose.model('Tag', tagSchema);