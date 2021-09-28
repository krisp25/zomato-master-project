import express from "express";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /new
Des       Add new food review/rating
Params    None
Body      Review Object
Access    Public
Method    POST
*/
Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully created review" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /delete
Des       Add new food review/rating
Params    _id
Access    Public
Method    DELETE
*/
Router.delete("/delete", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully deleted the review" }); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;