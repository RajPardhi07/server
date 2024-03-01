import express from 'express'
import dotenv from "dotenv"
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

//configure env
dotenv.config();

//database congig
connectDB();

const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)



app.get("/", (req, res) => {
     res.send("<h1>Welcome to ecommerce app</h1>")
});


//port
const PORT = process.env.PORT || 8080;

// RUN Listen
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
})