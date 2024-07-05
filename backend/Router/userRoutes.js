const express = require('express');
const {registerUser, authUser,allUsers} = require('../Controller/userController');
const { protect } = require('../Middleware/authMidleware');
const router = express.Router();

router.route('/').post(registerUser).get(protect,allUsers);
router.post('/login',authUser);


module.exports = router;