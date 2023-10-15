import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado ao MongoDb");
    } catch (error) {
        console.log("Erro ao se conectar ao MongoDB", error);
    }
};

export default connectMongoDB;