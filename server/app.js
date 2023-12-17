import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbconfig.js';

// importing routes
import shirtsRoute from './routes/shirtsRoute.js';

dotenv.config();

// creating an express app
const app = express()
const PORT = process.env.PORT;

// middleware
const corsOptions = {
    origin: ["https://menhew.onrender.com", "http://localhost:3000"] // frontend URI (ReactJS)
}

app.use(cors(corsOptions));
app.use(express.json())

// route
app.use("/api", shirtsRoute)

// start server if database is connected
connectDB()
    .then(() => {
        app.listen(PORT || 8800, () => {
            console.log(`Server is running at port : ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("Error starting the server !!", error)
    })