// db.js

import mongoose from 'mongoose';

const url = process.env.MONGODB_URI as string;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection Failed', error);
    }
};

export default connectDB;