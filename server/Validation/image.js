import joi from "joi";

export const ValidateImage = (imageUrl) => {
    const Schema = joi.object({
        images: joi.array().items(joi.string()),
    });

    return Schema.validateAsync(imageUrl);
};