import shirtsModel from "../models/shirtsModel.js";

export const getShirts = async (req, res) => {
    try {
        const shirts = await shirtsModel.find();
        res.status(201).json(shirts)
    } catch (error) {
        console.error("Error while getting shirts", error);
    }
}