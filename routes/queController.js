const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Kitchen = require('../models/Kitchen')
const Que = require('../models/Que')


router.get('/new', (req, res) => {
    res.render('que/new', {
        userId: req.params.userId,
        kitchenId: req.params.kitchenId
    })
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.kitchenId
    const que = new Que(req.body)
    User.findById(userId)
        .then((user) => {
            user.kitchens.id(kitchenId).ques.push(que)
            return user.save()
        })
        .then(() => {
            res.redirect(`/user/${userId}/kitchen/${kitchenId}`)
        })
})

router.get('/:id', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.kitchenId
    const queId = req.params.id
    User.findById(userId)
        .then((user) => {
            const kitchen = user.kitchens.id(kitchenId)
            const que = kitchen.ques.id(queId)
            res.render('que/show', {
                userId, kitchen, kitchenId, que, queId
            })
        })
    })

router.get('/:id/edit', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.kitchenId
    const queId = req.params.id
    User.findById(userId)
        .then((user) => {
            const kitchen = user.kitchens.id(kitchenId)
            const que = kitchen.ques.id(queId)
            res.render('que/edit', {
                userId, kitchen, kitchenId, que, queId
            })
        })
})

router.put('/:id', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.kitchenId
    const queId = req.params.id
       User.findById(userId) 
        .then((user) => {
            const kitchen = user.kitchens.id(kitchenId)
            const que = kitchen.ques.id(queId)
            que.name = req.body.name
            que.restaurant = req.body.restaurant
            return user.save()
       })
        .then(() => {
            res.redirect(`/user/${userId}/kitchen/${kitchenId}/que/${queId}`)
        })
        .catch(err => console.log(err))
    })


router.delete('/:id', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.kitchenId
    const queId = req.params.id
    User.findById(userId)
    .then((user) => {
        user.kitchens.id(kitchenId).ques.id(queId).remove()
        return user.save()
    })
    .then(() => {
        res.redirect(`/user/${userId}/kitchen/${kitchenId}`)
    })
})

module.exports = router