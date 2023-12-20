import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbconfig.js';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: './.env'
});

// creating an express app
const app = express()

const PORT = process.env.PORT;
const corsOrigins = process.env.CORS_ORIGIN.split(','); // extract and split CORS origins from the environment variable

// middleware configuration
const corsOptions = {
    origin: corsOrigins, // frontend URI (ReactJS)
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser());

// importing routes and binding them
import authRoute from './routes/authRoute.js';

app.use("/api/auth", authRoute)

// start server if database is connected
connectDB()
    .then(() => {
        app.listen(PORT || 8800, () => {
            console.log(`⚙️  Server is running at port : ${PORT}`);
            app.get("/", (req, res) => {
                res.status(201).send("Hi, from app.js ! Your server is running successfully.")
            })
        })
    })
    .catch((error) => {
        console.log("Error starting the server !!", error)
    })