const express = require('express');
const connectDB = require('./config/connection');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');

const app = express();
require('dotenv').config();
connectDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);




app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));