import mongoose from "mongoose";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }],
    },
    {
        timestamps: true,
    }
);

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    // check whether user exists
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if(checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exists...!");
    }

    return false;
};

UserSchema.pre("save", function (next) {
    const user = this;

    // password is modified
    if (!user.isModified("password")) return next();

    // generate bcrypt salt
    brcypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        // hash the password
        brcypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error);

            // assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);