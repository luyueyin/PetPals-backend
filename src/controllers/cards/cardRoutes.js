const express = require('express')
const {getCards, getCardById, createCard, updateCard, deleteCard } = require('./cardControllers')

const cardRouter = express.Router()


cardRouter.get("/", async (req, res) => {
    const cards = await getCards()
    res.json(cards)
})

cardRouter.get("/:cardId", async (req, res) => {
    const card = await getCardById(req.params.cardId)
    if(!card) {
        res.status(404).json({
            
            data: "Card doesn't exist"
        })
    }
    res.json(card)
})

cardRouter.post("/", async (req, res) => {
    const card = await createCard({
        name: req.body.name,
        experience: req.body.experience,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.address,
        description: req.body.description
    })
    res.json(card)
});

cardRouter.put('/:cardId', async (req, res) => {
    const updatedCard = await updateCard(req.param.cardId, {
        name: req.body.name,
        experience: req.body.experience,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city,
        description: req.body.description,
        })
        res.json(updatedCard)
})



cardRouter.delete("/:cardId", async (req, res) => {
    const card = await deleteCard(req.params.cardId)
    res.json(card)
})

module.exports = cardRouter