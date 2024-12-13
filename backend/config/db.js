import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://greatstack:230305@cluster0.ea7yn8h.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}