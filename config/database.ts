import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    }catch(err){
        console.error('MongoDB connection failed:', err);
    }
};

export default connectDB;