const express = require('express');
const {registerUser, authUser,allUsers} = require('../Controller/userController');
const { protect } = require('../Middleware/authMidleware');
const router = express.Router();

router.route('/').get(protect,allUsers);
router.route("/").post(registerUser);
router.post('/login',authUser);


module.exports = router;