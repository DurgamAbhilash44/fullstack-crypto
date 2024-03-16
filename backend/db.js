import mongoose from 'mongoose'

 // const mongodbURL='mongodb+srv://vafejon771:zbf0crhjRsJev3x9@cluster0.w7oelzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const mongodbURL=process.env.mongoURL;
mongoose.connect(mongodbURL)

const db=mongoose.connection;


db.on('error',()=>{
  console.log("error occured while connecting to the data base")
})

db.on('connected',()=>{
  console.log("connected to mongodb")
})

export default db;

