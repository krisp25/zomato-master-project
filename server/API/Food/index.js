// Libraries
import express, { json } from "express";
import passport from "passport";

// Database model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       
Params    none
Access    Public
Method    GET
*/