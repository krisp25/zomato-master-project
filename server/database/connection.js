import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(
    process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
};
