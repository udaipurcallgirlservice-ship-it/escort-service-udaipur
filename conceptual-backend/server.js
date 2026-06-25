import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json({ limit: '10mb' })); 
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));


const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myblogdb_prod'; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully! Target DB:', MONGO_URI.split('/').pop()))
  .catch(err => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); 
  });

mongoose.connection.on('error', err => {
  console.error('MongoDB runtime error:', err);
});


app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Conceptual Blog API. See /api/blogs for blog routes and /api/auth for authentication.' });
});


app.use((req, res, next) => {
  const error = new Error(`API endpoint not found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack || err);
  const statusCode = err.status || 500;
  res.status(statusCode).json({ 
    message: err.message || 'An unexpected server error occurred.',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) 
  });
});

app.listen(PORT, () => {
  console.log(`Conceptual backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('To run this backend, navigate to the conceptual-backend directory and use "node server.js" or "npm run server:dev" if nodemon is configured.');
  console.log('Ensure MongoDB is running and the MONGO_URI is correctly set in your .env file (e.g., MONGO_URI=mongodb://localhost:27017/yourdbname).');
  console.log('A JWT_SECRET should also be set in your .env file for secure token generation.');
});