const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Dish = require('../models/Dish')

router.get('/', (req, res, next) => {
    User.find()
        .then((userSpecs) => {
            res.render('user/index', {
                userSpecs
            })
        }) .catch((err) => res.send('error ' + err))
})

router.get('/new', (req,res) => {
    res.render('user/new')
})

router.post('/', (req, res) => {
    const newUser = req.body
    User.create(newUser)
        .then(() => {
            res.redirect('/user')
        })
})


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((userSpecs) => {
            res.render('user/show', {
                userSpecs, userId: req.params.id
            })
        })
})

router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id)
        .then((userSpecs) => {
            res.render('user/edit', { userSpecs})
        })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => {
            res.redirect(`/user/${req.params.id}`)
        })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/user')
        })
})

//Cut From Que Route
router.delete('/:id/cut/:dishId', (req, res) => {
    const dishId = req.params.dishId
    const userId = req.params.id
    User.findById(userId)
    .then((user) => {
        let que = user.dishQue
       que.id(dishId).remove()
        return user.save()
    })
    .then(() => {
        res.redirect(`/user/${userId}/cut/remove`)
    })
})

router.get('/:id/cut/remove', (req, res) => {
    const userId = req.params.id
    res.redirect(`/user/${userId}`)
})

module.exports = router