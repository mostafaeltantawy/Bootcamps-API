const express = require('express');
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require('../controllers/users');
const { protect, authorize } = require('../middleware/auth');

const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
