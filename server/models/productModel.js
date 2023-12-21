import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true,
    },
    productSize: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'],
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    images: [
        {
            data: {
                type: Buffer,
                required: true,
            },
            contentType: {
                type: String,
                required: true,
            },
        },
    ],
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);