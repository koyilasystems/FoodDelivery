import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://koyilasystems:Dasi12345Ramesh@project3.647df.mongodb.net/fooddel").then(()=>console.log("DB Connected"));
}





