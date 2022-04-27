import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = dotenv.config().parsed;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    // without destructuring (line 12) => 
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("We are connected to the database.");
  })
  .catch((error) => {
    console.log("An error occurred while connecting ot the db", error);
  });


  // declare an endpoint
app.use('/user', userRoutes)

  app.listen(process.env.PORT, () => {
    console.log("The server is listening for requests");
    });