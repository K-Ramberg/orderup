const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Menu = require('../models/Menu')
const Dish = require('../models/Dish')


router.get('/new', (req, res) => {
    res.render('dish/new', {
        userId: req.params.userId,
        menuId: req.params.menuId
    }) 
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dish = new Dish(req.body)
    User.findById(userId)
        .then((user) => {
            user.menus.id(menuId).dishes.push(dish)
            return user.save()
        })
        .then(() => {
            res.redirect(`/user/${userId}/menu/${menuId}`)
        })
})

router.get('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dishId = req.params.id
    User.findById(userId)
        .then((user) => {
            const menu = user.menus.id(menuId)
            const dish = menu.dishes.id(dishId)
            res.render('dish/show', {
                userId, menu, menuId, dish, dishId
            })
        })
    })

router.get('/:id/edit', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dishId = req.params.id
    User.findById(userId)
        .then((user) => {
            const menu = user.menus.id(menuId)
            const dish = menu.dishes.id(dishId)
            res.render('dish/edit', {
                userId, menu, menuId, dish, dishId
            })
        })
})

//QUE PUSH ROUTE
router.post('/:id/send', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dishId = req.params.id
    const dishNew = new Dish(req.body)
       User.findById(userId) 
        .then((user) => {
            dish = user.menus.id(menuId).dishes.id(dishId)
            user.dishQue.push(dishNew)
            return user.save()
       })
        .then(() => {
            res.redirect(`/user/${userId}/menu/${menuId}`)
        })
        .catch(err => console.log(err))
    })


router.put('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dishId = req.params.id
       User.findById(userId) 
        .then((user) => {
            const menu = user.menus.id(menuId)
            const dish = menu.dishes.id(dishId)
            dish.name = req.body.name
            dish.price = req.body.price
            dish.ingredients = req.body.ingredients
            dish.cookTime = req.body.cookTime
            dish.ovensNeeded = req.body.ovensNeeded
            dish.stovesNeeded = req.body.stovesNeeded
            return user.save()
       })
        .then(() => {
            res.redirect(`/user/${userId}/menu/${menuId}/dish/${dishId}`)
        })
        .catch(err => console.log(err))
    })


router.delete('/:id', (req, res) => {
    const userId = req.params.userId
    const menuId = req.params.menuId
    const dishId = req.params.id
    User.findById(userId)
    .then((user) => {
        user.menus.id(menuId).dishes.id(dishId).remove()
        return user.save()
    })
    .then(() => {
        res.redirect(`/user/${userId}/menu/${menuId}`)
    })
})

module.exports = router