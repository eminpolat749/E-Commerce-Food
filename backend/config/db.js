import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://eminpolatsoft:308749lol@cluster0.tl5yhvj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}