import mongoose from "mongoose";

const connectDB = async () => {
  const DATABASE = 'mongodb+srv://makarandchikhale1997:makarand7709@cluster0.cuyxkqi.mongodb.net/travel_app_data?retryWrites=true&w=majority';
  await mongoose.connect(DATABASE).then(() => {
    console.log('Database connection successful')
  }).catch((err) => {
    console.log(err)
  })
}

export default connectDB;

// mongoose.connect(DATABASE).then(( ) => {
//   console.log('Database connection successful')
// }).catch((err) => {
//   console.log(err)
// })