import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import orderRoute from './routes/order.route.js';
import menuRoutes from './routes/menu.route.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//middleware
const app = express();

app.use(cors({
  origin: "https://mybobapage.netlify.app", //replace with deployed frontend URL 
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/menu", menuRoutes);

//port
const PORT = process.env.PORT;

//routes 
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });