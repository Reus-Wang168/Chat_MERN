import mongoose  from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connect to MogoDB")
    } catch (error) {
        console.log("Error connecting to MogoDB",error.message);

    }
}


// const client = new MongoClient(env.MONGO_DB_URL, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
  
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (err) {
//     console.error(err);
//   }


export default connectToMongoDB;