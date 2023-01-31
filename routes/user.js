const express = require('express')
const userRouter = express.Router()
const {getAllUsers, postUser, findUserById} = require('../controllers/user')

userRouter.route('/users').get(getAllUsers).post(postUser)
userRouter.route('/users/:id').get(findUserById)



module.exports = userRouter