import app from './app.js';
import { connectDB } from './db.js';
require("dotenv").config()

connectDB();


app.listen(process.env.PORT || 4000, () => {
    console.log('You are connected');
});