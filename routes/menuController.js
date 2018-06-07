const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Menu = require('../models/Menu')

router.get('/', (req, res, next) => {
    User.findById(req.params.userId)
        .then((user) => {
            const menus = user.menus
            res.render('menu/index', {
                menus, userId: req.params.userId
            })
        }) .catch((err) => res.send('error ' + err))
})

router.get('/new', (req, res) => {
    res.render('menu/new', {
        userId: req.params.userId
    })
})

router.post('/', (req, res) => {
    const menu = new Menu(req.body)
    User.findById(req.params.userId)
        .then((user) => {
            user.menus.push(menu)
            return user.save()
        })
        .then(() => {
            res.redirect(`/user/${req.params.userId}/menu`)
        })
})

module.exports = router