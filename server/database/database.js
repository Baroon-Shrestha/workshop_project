import mongoose from "mongoose";

export const dbconnection = () => {
    const URI = process.env.MONGODB_URI

    mongoose.connect(URI).then(() => {
        console.log("connection successfull")
    }).catch((err) => {
        console.log(err.message)
    })

}