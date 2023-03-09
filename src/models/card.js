const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    point: Number,
});

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
    },
    experience: String,
    city: {
        type: String,
        minLength: 3,
    },
    phone: {
        type: Number,
        minLength: 6,
    },
    email: {
        type: String,
        validate: (value) => {
            return value.includes("@")
        },
        message: "Please enter a valid email address"
    },
    description: String,
    // image: URL,
    reviews: [ReviewSchema],
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
