import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'

//app config
const app = express();
const PORT = process.env.PORT || 4000

//middleware
app.use(cors());
app.use(express.json());

// db conection
connectDB()

// api endpoints
app.use('/api/food', foodRouter)
app.use("/images",express.static("uploads"))
app.use('/api/user', userRouter)

app.get('/',(req,res)=>{
    res.send("Hello from the server")
})

app.listen(PORT,()=>{console.log(`the server was running of port ${PORT}`)})
