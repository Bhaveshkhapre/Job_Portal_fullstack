import mongoose from "mongoose";
const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.Mongo_Url)
        console.log('Mongodb Connected successfully')
        
    }catch{
        console.log('Mongodb Connection Unsuccessfully ');
    }
}

export default connectDb;