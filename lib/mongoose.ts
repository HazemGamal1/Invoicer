import mongoose from "mongoose"

export const connectDb = async () => {
    try{
        console.log("mongo uri : "  + process.env.MONGO_URI);
        const conn = await mongoose.connect("mongodb+srv://hydrovid54:qSV0enIivCQVLCuS@cluster0.wzwad.mongodb.net/auth_db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongo db connected " + conn.connection.host);
    }catch(error : any)
    {
        console.log("Error connectiong to mongodb: " + error.message);
        process.exit(1);
    }
}
