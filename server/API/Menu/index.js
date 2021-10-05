// Libraries
import express from "express";
import passport from "passport";

// Database model
import { MenuModel, ImageModel } from "../../database/allModels";

// Validations
import { ValidateRestaurantId } from "../../Validation/food";

const Router = express.Router();

/*
Route     /list
Des       Get all list menu based on particular restaurant 
Params    _id
Access    Public
Method    GET
*/
Router.get("/list/:_id", async (req, res) => {
    try {
        // Validation
        await ValidateRestaurantId(req.params);

        const { _id } = req.params;

        const menus = await MenuModel.findById(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /image
Des       Get all menu images based on particular restaurant 
Params    _id
Access    Public
Method    GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        // Validation
        await ValidateRestaurantId(req.params);
        
        const { _id } = req.params;

        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;