const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users_router'));
router.use('/posts',require('./post_router'));
router.use('/comment', require('./comment_router'));
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

router.use("/likes", require('./like_router'));
router.use("/friend", require('./friend_router'));
router.use('/forget',require('./forget_router'));

module.exports = router;