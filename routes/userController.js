const express = require('express')
const router = express.Router()
const User = require('../models/User')

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
    User.findById(req,params.id)
        .then((userSpecs) => {
            res.render('/user/edit', { userSpecs})
        })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => {
            res.redirect(`/user/${req.params.id}`)
        })
})

router.delete('/:id', (req, res) => {
    user.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/user')
        })
})

module.exports = router