import mongoose from "mongoose";

const shirtSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number
})

// creating a mongoose model/mongodb collection named "shirts" to store shirts details
const shirtsModel = mongoose.model("shirts", shirtSchema);

export default shirtsModel;