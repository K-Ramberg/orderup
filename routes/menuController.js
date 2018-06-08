const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Menu = require('../models/Menu')

// router.get('/', (req, res, next) => {
//     User.findById(req.params.userId)
//         .then((user) => {
//             const menus = user.menus
//             res.render('menu/index', {
//                 menus, userId: req.params.userId
//             })
//         }) .catch((err) => res.send('error ' + err))
// })

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
            res.redirect(`/user/${req.params.userId}`)
        })
})

router.get('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.id
    User.findById(userId)
        .then((user) => {
            const menu = user.menus.id(menuId)
            res.render('menu/show', {
                userId, menu, menuId
            })
        })
    })

router.get('/:id/edit', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.id
    User.findById(userId)
        .then((user) => {
            const menu = user.menus.id(menuId)
            res.render('menu/edit', {
                userId, menu, menuId
            })
        })
})

router.put('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.id
       User.findById(userId) .then((user) => {
            const menu = user.menus.id(menuId)
            menu.findByIdAndUpdate(menuId, req.body, {new: true})
             res.redirect(`/user/${userId}/menu/${menuId}`)
        })
})


router.delete('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.id

    User.findById(userId)
    .then((user) => {
        user.menus.id(menuId).remove()
        return user.save()
    })
    .then(() => {
        res.redirect(`/user/${userId}`)
    })
})

module.exports = router