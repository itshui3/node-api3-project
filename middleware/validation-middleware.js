//db
const userDb = require('../users/userDb');

const validateUser = (req, res, next) => {
  req.body 
    ?
      req.body['name']
        ?
          next()
        : 
          res.status(400).json({ message: "invalid user id" })
    :
      res.status(400).json({ message: "missing user data"})

}

const validateUserId = (req, res, next) => {
  const userId = req.params.userId;
  userDb.getById(userId)
    .then( user => {
      console.log(user);
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