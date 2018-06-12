const mongoose = require('mongoose')
require('dotenv').config()
const User = require('../models/User')
const Menu = require('../models/Menu')
const Dish = require('../models/Dish')

mongoose.connect(process.env.MONGODB_URI) //may have to move to localhost method
    .then(() => {
        console.log('connected to MongoDB')
    }).catch((err) => {
        console.log('Error ', err)
    })

User.remove()
    .then(() => {
        const James = new User({
            name: "James Smith",
            restaurant: "Some Hole in the Wall",
            menus: [],
            dishQue: []
        })

        const breakfast = new Menu({
            name: "Breakfast",
            dishes: []
        })

        const platter = new Dish({
            name: "Big Breakfast Platter",
            price: 8.99,
            ingredients: "eggs, sausage, toast, hashbrowns, bacon, grits",
            cookTime: 6,
            ovensNeeded: 0,
            stovesNeeded: 3
        })

        const omelet = new Dish({
            name: "Omelet",
            price: 5.99,
            ingredients: "eggs, toast, hashbrowns, bacon or sausage, cheddar or American cheese",
            cookTime: 4,
            ovensNeeded: 0,
            stovesNeeded: 1
        })

        const toaster = new Dish({
            name: "Breakfast Sandwich",
            price: 6.99,
            ingredients: "eggs, toast, grits, bacon, American cheese",
            cookTime: 4,
            ovensNeeded: 0,
            stovesNeeded: 2
        })
        breakfast.dishes.push(toaster, omelet, platter)

        const lunch = new Menu({
            name: "Lunch",
            dishes: []
        })

        const salad = new Dish({
            name: "Standard Boring Salad",
            price: 3.99,
            ingredients: "lettuce, kale, ranch dressing, tomato",
            cookTime: 1,
            ovensNeeded: 0,
            stovesNeeded: 0
        })

        const chickSand = new Dish({
            name: "Chicken Sandwich",
            price: 4.99,
            ingredients: "lettuce, onions, tomato, fried chicken breast, toasted bread",
            cookTime: 5,
            ovensNeeded: 1,
            stovesNeeded: 0
        })
        lunch.dishes.push(chickSand, salad)
        James.menus.push(breakfast, lunch)

        return James.save()
    }).then(() => {
        return User.create({
            name: "Dave Jones",
            restaurant: "Italian Guy's",
            menus: [],
            dishQue: []
        })
    }).then((dave) => {
        const dinner = new Menu({
            name: "Dinner-Main",
            dishes: []
        })

        const lasagna = new Dish({
            name: "Lasagna",
            price: 12.99,
            ingredients: "noodles, tomato sauce, ground beef, Italian cheeses",
            cookTime: 25,
            ovensNeeded: 2,
            stovesNeeded: 0
        })

        const chickParm = new Dish({
            name: "Chicken Parmesan",
            price: 13.99,
            ingredients: "noodles, tomato sauce, breaded chicken, Italian cheeses",
            cookTime: 15,
            ovensNeeded: 1,
            stovesNeeded: 1
        })
        dinner.dishes.push(chickParm, lasagna)

        const specialD = new Menu({
            name: "Dinner-Specials",
            dishes: []
        })

        const redSnapper = new Dish({
            name: "Red Snapper Francese",
            price: 17.99,
            ingredients: "noodles, lemon, butter, egg, red snapper, Italian cheeses",
            cookTime: 18,
            ovensNeeded: 1,
            stovesNeeded: 2
        })

        const vealdish = new Dish({
            name: "Veal with it",
            price: 18.99,
            ingredients: "noodles, risoto, veal meat",
            cookTime: 15,
            ovensNeeded: 1,
            stovesNeeded: 1
        })
        specialD.dishes.push(vealdish, redSnapper)
        dave.menus.push(dinner, specialD)

        return dave.save()
    })
    .catch((err) => {
        console.log("there was a seeding problem")
    })
    .then(() => {
        mongoose.connection.close()
        console.log("seeding complete")
    })