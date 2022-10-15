import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import mongoDBConnection from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import sizeRouter from './routes/sizeRoute.js';
import cors from 'cors';
import colorRouter from './routes/colorRoute.js';
import tagRouter from './routes/tagRoute.js';
import brandRouter from './routes/brandRoute.js';
import categoryRouter from './routes/categoryRoute.js';


// initalize express
const app = express();
// Configure dotenv
dotenv.config();

// middleware permision
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cors());

app.use(express.static('api/public'));

// initialize environmet 
const PORT = process.env.SERVER_PORT || 5000;

// Routes
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/brand', brandRouter);
app.use('/api/v1/tag', tagRouter);
app.use('/api/v1/color', colorRouter);
app.use('/api/v1/size', sizeRouter);
app.use('/api/user', userRouter);


// Custom error handler middleware
app.use( errorHandler );


// Listen
app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`server on running on port ${ PORT }`.bgGreen.black);
})
