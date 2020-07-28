const express = require('express');
const { getMany, getOne, createOne, updateOne, removeOne } = require('../controllers/bootcamps');
const router = express.Router();

router.route('/')
  .get(getMany)
  .post(createOne)

router.route('/:id')
  .get(getOne)
  .put(updateOne)
  .delete(removeOne)

module.exports = router;
