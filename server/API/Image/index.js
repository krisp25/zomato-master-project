// Libraries
import express, { json } from "express";
import passport from "passport";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3upload } from "../../utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Uploads given image to S3 Bucket and saves file link to mongodb
Params    _id
Access    Public
Method    POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // S3 Bucket options
        const bucketOptions = {
            Bucket: "krispy-zomato-master",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",   // Access Control List
        };

        const uploadImage = await s3upload(bucketOptions);

        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;