import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:stackoverflowclone@stackoverflowclone.yfu2eqw.mongodb.net/?retryWrites=true&w=majority&appName=stackoverflowClone", {//process.env.CONNECTION_URL
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
