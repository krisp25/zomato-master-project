import joi from "joi";

export const ValidateOrderId = (orderId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });

    return Schema.validateAsync(orderId);
};

export const ValidateOrderDetails = (oDetails) => {
    const Schema = joi.object({
        orderDetails: joi.array().items(joi.object({
            food: joi.string(),
            quantity: joi.number().required(),
            paymode: joi.string().required(),
            status: joi.string(),
            paymentDetails: joi.object({
                itemTotal: joi.number().required(),
                promo: joi.number().required(),
                tax: joi.number().required(),
            }),
        })),
    });

    return Schema.validateAsync(oDetails);
};