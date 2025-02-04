import mongoose from 'mongoose'


const connectToMongo = async ()=>{
    const res = await mongoose.connect("mongodb://localhost:27017/todo-mern-app");

    res && console.log("Connected") 

};

export default connectToMongo;