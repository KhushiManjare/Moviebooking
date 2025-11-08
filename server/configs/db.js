// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
//         mongoose.connection.on('connected', () => console.log('Database connected ✅'));
//     } 
//     catch (error) {
//         console.log('Database connection error ❌:', error.message);
//     }
// }

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log("🟡 Connecting to MongoDB...");

    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
};

export default connectDB;
