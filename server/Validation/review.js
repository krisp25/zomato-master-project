import joi from "joi";

export const ValidateReviewData = (reviewData) => {
    const Schema = joi.object({
        food: joi.string(),
        restaurant: joi.string(),
        user: joi.string(),
        rating: joi.number().required(),
        reviewText: joi.string().required(),
        isRestaurantReview: joi.boolean(),
        isFoodReview: joi.boolean(),
        photos: joi.string(),
    });

    return Schema.validateAsync(reviewData);
};

export const ValidateReviewId = (revId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });

    return Schema.validateAsync(revId);
};