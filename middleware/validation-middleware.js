const express = require('express');
//db
const userDb = require('../users/userDb');

const validateUser = (req, res, next) => {  
  if (Object.entries(req.body).length) {

    if(req.body['name']) {
      next();
    } else {
      res.status(400).json({ message: "missing name field" });
    }
  } else {

    res.status(400).json({ message: "missing user data" })
  }
}

const validateUserId = (req, res, next) => {
  const userId = req.params.userId;
  userDb.getById(userId)
    .then( user => {
      if (user) {
        next()
      } else {
        res.status(400).json({ message: 'invalid user id' })
      }
    })
    .catch( err => {
      res.status(400).json({ message: 'invalid user id' })
    })
}

const validation = {
  validateUser: validateUser,
  validateUserId: validateUserId
}
module.exports = validation;