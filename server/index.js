import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";



const app = express();
import ChatRoute from "./routes/ChatRoute.js"
import MessageRoute from './routes/MessageRoute.js'

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



dotenv.config();
const PORT = 8000; // Change this line to set the port as a number

const CONNECTION = "mongodb+srv://anish_luiz:anish_1723@cluster0.iqiufe9.mongodb.net/recipesApi?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)