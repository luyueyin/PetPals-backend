const Card = require('../../models/card')
const cardRouter = require('./cardRoutes')
// {
//     "name": "Alice",
//     "experience": "2 years",
//     "city": "Catalinaton",
//     "phone": 16664784,
//     "email": "alice@gmail.com",
//     "description": "Professional pet sitter with 5 years of experience. Flexible scheduling to accommodate clients' needs"
// }
const cards = [
    {
        "id": 1,
        "name": "Alice",
        "experience": 2,
        "phone": "(04) 1666-4784",
        "email": "aliceexample.com",
        "city": "Catalinaton",
        "description": "Professional pet sitter with 5 years of experience. Flexible scheduling to accommodate clients' needs",
        "value": "5"
    },
    {
        "id": 2,
        "name": "Bob",
        "experience": 5,
        "phone": "(04) 4635-7736",
        "email": "bobexample.com",
        "city": "East Vinnieton",
        "description": "Excellent communication skills, including regular updates for pet owners while they are away.",
        "value": "4.5"
    },
    {
        "id": 3,
        "name": "Charlie",
        "experience": 2,
        "phone": "(02) 4861-4744",
        "city": "charlieexample.com",
        "address": "South Noemietown",
        "description": "Skilled in providing exceptional care and attention to pets of all types and sizes.",

    }
]

async function getCards() {
    const cards = await Card.find()
    return cards
}

async function getCardById(cardId) {
    try {
        const card = await Card.findById(cardId)
        return card
    } catch(err) {
        console.log(err)
    }
}

async function createCard(card) {
    const newCard = await Card.create(card)
    return newCard
}

async function updateCard(cardId, card) {
    const updatedCard = await Card.findByIdAndUpdate(cardId, card, {
        returnDocument: "before",
        new: true, // return the updated card
        // upsert: true, // create a new card if it doesn't exist
    })
    return updatedCard
}

async function deleteCard(cardId) {
    //deleteOne/Many will delete but not return the records
    //findByIdAndDelete / findOneAndDelete returns the records
    const deletedCard = await Card.findByIdAndDelete(cardId)
    return deletedCard
}

module.exports = {
    getCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard,
}