//express
const express = require('express');
//db
const userDb = require('./userDb');
const postDb = require('../posts/postDb');
//generate router
const router = express.Router();
//middleware
//validation
const validation = require('../middleware/validation-middleware');

router.post('/', validation.validateUser, (req, res) => {

  userDb.insert(req.body)
    .then( user => {
      res.status(200).json({ message: 'successfully added a new user', newUser: req.body, userId: user })
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ error: 'Internal server error 500: could not add user' })
    })

  // do your magic!
});

const postingPosts__MiddlewareStacc = [validation.validatePost, validation.validateUserId];
router.post('/:userId/posts', ...postingPosts__MiddlewareStacc , (req, res) => {
  // posted object has 2 props: user_id && text
  const userId = req.params.userId;
  const newPost = {
    ...req.body,
    user_id: userId
  }
  console.log(newPost);

  postDb.insert(newPost)
    .then( reso => {
      console.log(reso);
      res.status(200).json({ post: req.body, message: "Status 200: successful post"})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json({ message: "Internal server error 500: could not write post" })
    })
});

router.get('/', (req, res) => {
  // do your magic!
  console.log('inside /api/users GET');
});

router.get('/:userId', validation.validateUserId, (req, res) => {
  // do your magic!
  console.log('inside /api/users/:userId GET')
});

router.get('/:userId/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware
// ** I built these in a separate file and import it in as an object **
// function validateUserId(req, res, next) {
//   // do your magic!
// }

// function validateUser(req, res, next) {
//   // do your magic!
// }

// function validatePost(req, res, next) {
//   // do your magic!
// }

module.exports = router;
