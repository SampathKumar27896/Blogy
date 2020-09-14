const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
var postController = require('../controller/PostController');
router.get('/posts',auth, postController.index);


module.exports = router;