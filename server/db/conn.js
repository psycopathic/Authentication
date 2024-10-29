import mongoose from 'mongoose';


const DB = "mongodb+srv://harshsrivastava2502:Authentication@authentication.a0tu3.mongodb.net/?retryWrites=true&w=majority&appName=Authentication"

const connectionDB = async () =>{
    try {
        await mongoose.connect(DB);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database caught an error while connecting", error);
    }
}

export default connectionDB


