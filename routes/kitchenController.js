const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Kitchen = require('../models/Kitchen')


router.get('/new', (req, res) => {
    res.render('kitchen/new', {
        userId: req.params.userId
    })
})

router.post('/', (req, res) => {
    const kitchen = new Kitchen(req.body)
    User.findById(req.params.userId)
        .then((user) => {
            user.kitchens.push(kitchen)
            return user.save()
        })
        .then(() => {
            res.redirect(`/user/${req.params.userId}`)
        })
})

router.get('/:id', (req, res) => {
    const userId = req.params.userId
    const kitchenId = req.params.id
    User.findById(userId)
        .then((user) => {
            const kitchen = user.kitchens.id(kitchenId)
            res.render('kitchen/show', {
                userId, kitchen, kitchenId
            })
        })
    })


module.exports = router