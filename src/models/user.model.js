import mongoose from 'mongoose';

const userSchuema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }

}, {
    timestamps: true
})

export default mongoose.model('User', userSchuema);