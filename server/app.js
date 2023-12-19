import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbconfig.js';
import cookieParser from 'cookie-parser';

// importing routes

dotenv.config();

// creating an express app
const app = express()
const PORT = process.env.PORT;

// middleware
const corsOptions = {
    origin: ["https://menhew.onrender.com", "http://localhost:3000"], // frontend URI (ReactJS)
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// importing routes and binding them
import authRoute from './routes/authRoute.js';

app.use("/api/auth", authRoute)

// start server if database is connected
connectDB()
    .then(() => {
        app.listen(PORT || 8800, () => {
            console.log(`Server is running at port : ${PORT}`);
            app.get("/", (req, res) => {
                res.status(201).send("Hi, from app.js ! Your server is running successfully.")
            })
        })
    })
    .catch((error) => {
        console.log("Error starting the server !!", error)
    })