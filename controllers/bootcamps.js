


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getMany = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show bootcamp' });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.removeOne = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}


