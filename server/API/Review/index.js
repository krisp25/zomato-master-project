import express from "express";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/allModels";

// Validations
import { ValidateReviewId, ValidateReviewData } from "../../Validation/review";

const Router = express.Router();

/*
Route     /
Des       Get all review
Params    resid
Body      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant: req.params.resid });

        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /new
Des       Add new food review/rating
Params    None
Body      Review Object
Access    Public
Method    POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        // Validation
        await ValidateReviewData(req.body);

        const { _id } = req.session.passport.user._doc;

        const { reviewData } = req.body;

        await ReviewModel.create({ ...reviewData, user: _id});

        return res.json({ review: "Successfully created review" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /delete
Des       Delete food review/rating
Params    _id
Access    Public
Method    DELETE
*/
Router.delete("/delete", async (req, res) => {
    try {
        // Validation
        await ValidateReviewId(req.params);
        
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully deleted the review" }); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;